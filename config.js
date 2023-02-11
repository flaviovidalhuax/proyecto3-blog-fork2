require('dotenv').config()

const configs={
    api:{
        //nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT||3000,
        host:process.env.HOST || 'http://localhost:3000/',
    },
    db:{
        develpment:{
            dialect:'postgres',
            host:'localhost',
            username:'postgres',
            password:'1234',
            port:5432,
            database:'PostTest2',
            define:{
                timestamps:true,  //! creat_at and update_at
                underscord:true, //convierte en camelcase en snake_case nombres y tributos de mis modelos
                underscordAll:true
            },
            test:{},
            production:{}
        }
    }
}

module.exports=configs