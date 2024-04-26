import express from "express"
import cors from "cors"


const app = express();

app.use(cors());
app.use(express.json());

//dummy data

const data = [
    {
        id : 12345,
        status: "No Loans found against this property",
        address: "557 Sector 45, Gurugram, Haryana 122003",
        size: 225.5,
        stat: "success",
        type: "land"
    },
    {
        id : 12346,
        status: "Loans found against this property",
        address: "34, Potheri, Chengalpattu, Chennai 603203",
        size: 225.5,
        stat: "error",
        type: "land"
    },
    {
        id : 12347,
        status: "property under conflict",
        address: "557 Sector 45, Gurugram, Haryana 122003",
        size: 225.5,
        stat: "error",
        type: "land"
    },
    {
        id : 12348,
        status: "No Loans found against this property",
        address: "557 Sector 45, Gurugram, Haryana 122003",
        size: 225.5,
        stat: "success",
        type: "land"
    },
    {
        id : 67892,
        status: "No Loans found against this Vehicle",
        stat: "success",
        date: "15-11-2002",
        address: "557 Sector 45, Gurugram, Haryana 122003",
        type: "vehicle"
    },
    {
        id : 67893,
        status: "Loans found against this Vehicle",
        stat: "error",
        date: "15-11-2002",
        address: "557 Sector 45, Gurugram, Haryana 122003",
        type: "vehicle"
    },
    {
        id : 67890,
        status: "Vehicle under conflict",
        stat: "error",
        date: "15-11-2002",
        address: "557 Sector 45, Gurugram, Haryana 122003",
        type: "vehicle"
    },
    {
        id : 67891,
        status: "No Loans found against this Vehicle",
        stat: "success",
        date: "15-11-2002",
        address: "557 Sector 45, Gurugram, Haryana 122003",
        type: "vehicle"
    },
]

const VehicleData = [
    {
        id : 12345,
        status: "No Loans found against this Vehicle",
        stat: "success",
        date: "15-11-2002",
        address: "557 Sector 45, Gurugram, Haryana 122003",
        type: "vehicle"
    },
    {
        id : 12346,
        status: "Loans found against this Vehicle",
        stat: "error",
        date: "15-11-2002",
        address: "557 Sector 45, Gurugram, Haryana 122003",
        type: "vehicle"
    },
    {
        id : 12347,
        status: "Vehicle under conflict",
        stat: "error",
        date: "15-11-2002",
        address: "557 Sector 45, Gurugram, Haryana 122003",
        type: "vehicle"
    },
    {
        id : 12348,
        status: "No Loans found against this Vehicle",
        stat: "success",
        date: "15-11-2002",
        address: "557 Sector 45, Gurugram, Haryana 122003",
        type: "vehicle"
    },
]

//api

app.get("/loanProperty", (req, res)=>{
    const PropId = parseInt(req.query.id);
    // console.log(PropId);

    let loan = data.find(x => x.id === PropId)
    console.log(loan);
    if(!loan){
        res.status(300).json({
            msg: "Property Not found. Fill correct property ID",
        })
    }
    
    res.status(200).json({
        msg: loan.status,
        address: loan.address,
        size: loan.size,
        status: loan.stat,
        type: loan.type

    })
})
app.get("/loanVehicle", (req, res)=>{
    const VId = parseInt(req.query.id);
    // console.log(PropId);

    let loan = VehicleData.find(x => x.id === VId)
    console.log(loan);
    if(!loan){
        res.status(300).json({
            msg: "Vehicle Number Not found. Fill correct Number",
        })
    }
    
    res.status(200).json({
        msg: loan.status,
        status: loan.stat,
        date: loan.date,
        address: loan.address
    })
})

//for accepting value from 

// POST endpoint to handle form submission
// app.post("/loanProperty", (req, res) => {
//   // Assuming your frontend sends data in the request body
//   const { propNo, address, /* add more fields as needed */ } = req.body;

//   // Perform any validation or processing of the form data here
//   // For demonstration, we'll just send back a success response
//   // You can replace this with your actual logic
//   if (propNo && address /* add more validation as needed */) {
//     // If validation succeeds
//     return res.status(200).json({ status: "success", msg: "Loan property verified successfully." });
//   } else {
//     // If validation fails
//     return res.status(400).json({ status: "error", msg: "Invalid form data." });
//   }
// });





//server listening
app.listen(8000, ()=>{
    console.log("Backend started");
})