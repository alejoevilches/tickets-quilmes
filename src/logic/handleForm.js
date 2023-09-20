export function handleForm(e){
    const formData=new FormData(e.target.form)
    const formValues={}
    formData.forEach((value,key)=>{
        formValues[key]=value;
    })
    }
