import mongoose from "mongoose";


const mongourl = 'mongodb+srv://skabhishek90:r1abhi-21@cluster0.fule1vd.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(mongourl, 
    {
        useNewUrlParser:true ,
        useUnifiedTopology:true
    },
    err =>
    {
        if(err)
        console.log(err)
        else
        console.log('connected')
    }
    );

