const {helloworld} = require('./utils')


if(helloworld() === "hello worldx")
{
    console.log(  '{"_success":1, function_name:"helloworld()"}' );
}else{
    console.log(  '::error' );
}
