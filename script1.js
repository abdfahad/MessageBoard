document.addEventListener('DOMContentLoaded',()=>{

    let initiate = new XMLHttpRequest();
    initiate.onreadystatechange = ()=>{
        if(initiate.readyState == 4){
            let messages = JSON.parse(initiate.responseText);
            console.log(initiate.status);
            console.log(JSON.parse(initiate.responseText));
            console.log(initiate.response);
            console.log(messages);
            const now = new Date();
            var html = '';
            for(let i= messages.length-1; i>=0; i--){
                let message = messages[i];
                console.log(message);
                const d = new Date(message.createdAt);
                let duration = Math.floor(((now.getTime() - d)/1000)/60);
                console.log(d.getTime());
                let hr = false;
                let time = '';
                console.log(duration);
                if(duration >= 60){
                    duration = Math.floor(duration/60);
                    hr = true;
                }
                if(hr){
                    if(duration > 1){
                        time = `${duration} hours ago`;
                    }else{
                        time = `${duration} hour ago`;
                    }
                }else{
                    if(duration == 0){
                        time = `Just now`;
                    }else{
                        if(duration > 1){
                            time = `${duration} minutes ago`;
                        }else{
                            time = `${duration} minute ago`;
                        }
                    }
                }
                var m= `<div class="message">
                <h2 class="title">${message.title}</h2> 
                <p class="msg">${message.message}</p>
                <p class="name">${message.name}</p> 
                <p class= "time">${time}</p>
                </div>`;

                html += m;
            };

            document.getElementById('messages').innerHTML = html;
            console.log(initiate.status);
            console.log(JSON.parse(initiate.responseText));
            console.log(initiate.response);
        }
    }

    initiate.open("GET", "http://localhost:3000/messages");
    initiate.send();

    document.getElementById('newMsg').addEventListener('click',(event)=>{

       
    })
})