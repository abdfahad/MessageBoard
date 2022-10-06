document.addEventListener('DOMContentLoaded',()=>{

    document.getElementById('addMsg').addEventListener('click',(event)=>{
        let title = document.getElementById('title').value || null;
        let mesg = document.getElementById('msg').value || null;
        let name = document.getElementById('name').value || null;

        let msg = {};
        if(title){
            msg.title = title;
        }
        if(mesg){
            msg.message = mesg;
        }
        if(name){
            msg.name = name;
        }
        let toDb = new XMLHttpRequest();
        toDb.onload = ()=>{
            if(toDb.status == 200){
                document.location = 'index.html';
            }else{
                alert(`${toDb.status} : something went wrong`);
            }
        }  
        toDb.open('POST', 'https://floating-lake-82994.herokuapp.com/messages', true);
        toDb.setRequestHeader('Content-type', 'application/json');
        toDb.send(JSON.stringify(msg));
    })
})
