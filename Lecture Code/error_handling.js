try{
    let x = undefined
    console.log(x[1])
}catch(err){
    console.log("we got an error", err)
}finally{
    console.log("This is Finally")
}
