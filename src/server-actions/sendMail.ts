
import emailjs from '@emailjs/browser';

export async function sendEmailjs(form:any){
  
 return  emailjs.sendForm(
  "service_tg2x89a",`${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.form.current, `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
  ).then((response)=>{
      return response
    },(err)=>{
      return err
    });
  
}
