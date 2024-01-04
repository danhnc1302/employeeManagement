const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const moment = require("moment");
const app = express()
const PORT = 8000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://danhnc1302:congdanh@cluster0.inknoq3.mongodb.net/").then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.log("Error conncting to MongoDB")
})

app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT)
})


const Employee = require("./models/employee")
const Attendance = require("./models/attendance")

//Endpoint to register a employee
app.post("/addEmployee", async (req, res) => {
    try {
        const {
            employeeName,
            employeeId,
            designation,
            phoneNumber,
            dateOfBirth,
            joiningDate,
            activeEmployee,
            salary,
            address,
        } = req.body
        //Create a new Employee
        const newEmployee = new Employee({
            employeeName,
            employeeId,
            designation,
            phoneNumber,
            dateOfBirth,
            joiningDate,
            activeEmployee,
            salary,
            address,
        })

        console.log(newEmployee)

        await newEmployee.save()
        res.status(200).json({ message: "Employee saved successfully", employee: newEmployee })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to add an employee" })
    }
})

//Endpoint to fetch all the employees
app.get("/employees", async (req, res) => {
    try {
        const employees = await Employee.find()
        if (!employees) {
            res.status(404).json({ message: "Not found!" })
        }
        res.status(200).json(employees)
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Failed to retrieve the employees" })
    }
})

app.post("/attendance", async (req, res) => {
    try {
        const {
            employeeId,
            employeeName,
            date,
            status,
        } = req.body

        const existingAttendance = await Attendance.findOne({ employeeId, date })
        if (existingAttendance) {
            existingAttendance.status = status
            await existingAttendance.save()
            res.status(200).json(existingAttendance)
        } else {
            const newAttendance = new Attendance({
                employeeId,
                employeeName,
                date,
                status
            })
            await newAttendance.save()
            res.status(200).json(newAttendance)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Error Submitting attendance" })
    }
})

app.get("/attendance", async (req, res) => {
    try {
        const { date } = req.query
        console.log("data: ", date)
        const attendanceData = await Attendance.find({ date: date })
        res.status(200).json(attendanceData)
    } catch (error) {
        res.status(500).json({ message: "Error fetching attendance" })
    }
})

app.get("/attendance-report-all-employees", async (req, res) => {
    try {
      const { month, year } = req.query;
  
      console.log("Query parameters:", month, year);
      // Calculate the start and end dates for the selected month and year
      const startDate = moment(`${year}-${month}-01`, "YYYY-MM-DD")
        .startOf("month")
        .toDate();
      const endDate = moment(startDate).endOf("month").toDate();
  
      // Aggregate attendance data for all employees and date range
      const report = await Attendance.aggregate([
        {
          $match: {
            $expr: {
              $and: [
                {
                  $eq: [
                    { $month: { $dateFromString: { dateString: "$date" } } },
                    parseInt(req.query.month),
                  ],
                },
                {
                  $eq: [
                    { $year: { $dateFromString: { dateString: "$date" } } },
                    parseInt(req.query.year),
                  ],
                },
              ],
            },
          },
        },
  
        {
          $group: {
            _id: "$employeeId",
            present: {
              $sum: {
                $cond: { if: { $eq: ["$status", "present"] }, then: 1, else: 0 },
              },
            },
            absent: {
              $sum: {
                $cond: { if: { $eq: ["$status", "absent"] }, then: 1, else: 0 },
              },
            },
            halfday: {
              $sum: {
                $cond: { if: { $eq: ["$status", "halfday"] }, then: 1, else: 0 },
              },
            },
            holiday: {
              $sum: {
                $cond: { if: { $eq: ["$status", "holiday"] }, then: 1, else: 0 },
              },
            },
          },
        },
        {
          $lookup: {
            from: "employees", // Name of the employee collection
            localField: "_id",
            foreignField: "employeeId",
            as: "employeeDetails",
          },
        },
        {
          $unwind: "$employeeDetails", // Unwind the employeeDetails array
        },
        {
          $project: {
            _id: 1,
            present: 1,
            absent: 1,
            halfday: 1,
            name: "$employeeDetails.employeeName",
            designation:"$employeeDetails.designation",
            salary: "$employeeDetails.salary",
            employeeId: "$employeeDetails.employeeId",
          },
        },
      ]);
  
      res.status(200).json({ report });
    } catch (error) {
      console.error("Error generating attendance report:", error);
      res.status(500).json({ message: "Error generating the report" });
    }
  });