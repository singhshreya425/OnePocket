
//Task 1
const message = async function(req,res){
    try {
       const mes = req.query.mes||'world'
       res.send(`hello ${mes}!.`)
       console.log('slhbcbk')
      
        
    } catch (error) {
        return res.status(500).send(error=message.error)
        
    }
}
module.exports = message;


//Task2
function sumarrint(arr){
    if(!Array.isArray(arr)){
        throw new Error('input is not an array')
    }
    if(arr.length===0){
        return 0;
    }
    const sum = arr.reduce((acc,curr)=>acc+curr,0)
    return sum;
}

const sumint = async function(req,res){
    try {
        const {numbers}= req.body;
        if(!Array.isArray(numbers)){
            throw new Error('input is not an array')
        }
        const sum = sumarrint(numbers);
        res.json({sum});
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = sumint