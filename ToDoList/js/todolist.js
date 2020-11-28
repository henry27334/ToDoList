var todolist = [];
var id=1;
const root = document.documentElement;

function addList(){
    var _title = $('#title').val();
    var _message = $('#message').val();
    var _date = $('#date').val();
    

    if(_title == "" || _message == ""){
        alert("請入輸入標題和內容!");
    }
    else{
        var newtodo={
            '_id':id,
            'title':_title,
            'content':_message,
            'date' : _date,
            'status': false
        };

        todolist.push(newtodo);
        newList(newtodo);
        id++;

        $('#title').val('');
        $('#message').val('');
        $('#date').val('');
    }
}

function newList(data){
    
    var status = (data.status)?"checked":"";
    var titleClass = (data.status)?"title2":"title";
    var messageClass = (data.status)?"message2":"message";    
    var dateClass = (data.status)? "date2":"date";
    var editClass = (data.status)?"none":"inline";

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var date = today.getDate();
  　var nowDay =  month + "/" + date  + "/" + year ;
    var content;

    var _titleColor = $('#titleCP').val();
    var _messageColor = $('#messageCP').val();
    root.style.setProperty('--titleColor', `${_titleColor}`)
    root.style.setProperty('--messageColor', `${_messageColor}`)

    //document.write(data.date);

    if(data.date == ""){              
        content =
        `<div class="content" id = "${data._id}">
            <div class = "${titleClass}">
                <input type = "checkbox" id = "checkBox" onclick = "changeStatus('${data._id}', this)" />
                <text id = "title${data._id}">${data.title}</text>
                <button class = "i_btn" id = "deleteButton" onclick = "removeList('${data._id}')">刪除
                </button>
                <button class = "i_btn" id = "editDate${data._id}" style = "display:${editClass}"
                onclick = "editDate('${data._id}')">修改時間 
                <button class = "i_btn" id = "editContent${data._id}" style = "display:${editClass}"
                onclick = "editContent('${data._id}')">修改內文 
                <button class = "i_btn" id = "editTitle${data._id}" style = "display:${editClass}"
                onclick = "editTitle('${data._id}')">修改標題 
                </button>
                <button class = "i_btn" id = "update${data._id}" style="display:none"
                onclick = "updateList('${data._id}')">確認 
                </button>
            
            </div>
            <div class = "${messageClass}">
                <text id="message${data._id}">${data.content}</text>
            </div>        
            <div class = "${dateClass}">          
                <text id="date${data._id}">加入日期：${nowDay}</text>
            </div>
        </div>`; 

    }else{

        content =
        `<div class="content" id = "${data._id}">
            <div class = "${titleClass}">
                <input type = "checkbox" id = "checkBox"  onclick = "changeStatus('${data._id}', this)" />
                <text id = "title${data._id}">${data.title}</text>
                <button class = "i_btn" id = "deleteButton" onclick = "removeList('${data._id}')">刪除
                </button>
                <button class = "i_btn" id = "editDate${data._id}" style = "display:${editClass}"
                onclick = "editDate('${data._id}')">修改時間 
                <button class = "i_btn" id = "editContent${data._id}" style = "display:${editClass}"
                onclick = "editContent('${data._id}')">修改內文 
                <button class = "i_btn" id = "editTitle${data._id}" style = "display:${editClass}"
                onclick = "editTitle('${data._id}')">修改標題 
                </button>
                <button class = "i_btn" id = "update${data._id}" style="display:none"
                onclick = "updateList('${data._id}')">確認 
                </button>
            
            </div>
            <div class = "${messageClass}">
                <text id="message${data._id}">${data.content}</text>
            </div>        
            <div class = "${dateClass}">          
                <text id="date${data._id}">預設日期：${data.date}</text><br>
                <text id="date${data._id}">加入日期：${nowDay}</text>
            </div>
        </div>`; 
    }

    $('body').append(content);
    
       
}

function editTitle(id){
    $('#editTitle' + id).css("display", "none")
    $('#editContent' + id).css("display", "none")
    $('#editDate' + id).css("display", "none")
    $('#update' + id).css("display", "inline")
    $('#deleteButton').css("display", "none") 
    document.getElementById("checkBox").disabled = true;    

    var input = document.createElement("input");
    input.type = "text";
    input.id = "edit_title" + id;
    input.value = $('#title' + id).text();
    input.size = Math.max(20 / 4 * 3 , 4);

    $('#title' + id).css("display", "none");
    $('#title' + id).parent().append(input);
}

function editContent(id){
    $('#editTitle' + id).css("display", "none")
    $('#editContent' + id).css("display", "none")
    $('#editDate' + id).css("display", "none")
    $('#update' + id).css("display", "inline")
    $('#deleteButton').css("display", "none")
    document.getElementById("checkBox").disabled = true;    
    
    var message_input = document.createElement("input");
    message_input.type = "text";
    message_input.id = "edit_message" + id;
    message_input.value = $('#message' + id).text();
    message_input.size = Math.max(50 / 4 * 3, 4);

    $('#message' + id).css("display", "none");
    $('#message' + id).parent().append(message_input);

}

function editDate(id){
    $('#editTitle' + id).css("display", "none")
    $('#editContent' + id).css("display", "none")
    $('#editDate' + id).css("display", "none")
    $('#update' + id).css("display", "inline")   
    $('#deleteButton').css("display", "none") 
    document.getElementById("checkBox").disabled = true;    

    var date_input = document.createElement("input");
    date_input.type = "text";
    date_input.id = "edit_date" + id;
    date_input.value = $('#date' + id).text();
    date_input.size = Math.max(50 / 4 * 3, 5);

    $('#date' + id).css("display", "none");
    $('#date' + id).parent().append(date_input);

}

function updateList(id){
    var title = $('#edit_title' + id).val();
    var message = $('#edit_message' + id).val();
    var date = $('#edit_date' + id).val();

    $('#title' + id).text(title);
    $('#message' + id).text(message);
    $('#date' + id).text(date);

    $('#editTitle' + id).css("display", "inline");
    $('#editContent' + id).css("display", "inline");
    $('#editDate' + id).css("display", "inline");
    $('#update' + id).css("display", "none");
    $('#deleteButton').css("display", "inline")    
    document.getElementById("checkBox").disabled = false; 

    $('#title' + id).css("display", "inline");
    $('#message' + id).css("display", "inline");
    $('#date' + id).css("display", "inline");

    $('#edit_title' + id).remove();
    $('#edit_message' + id).remove();
    $('#edit_date' + id).remove();
}

function removeList(id){
    var index = todolist.findIndex(element => element._id == id);
    todolist.splice(index, 1);
    $('#'+id).remove();
}

function changeStatus(id, btnstatus){
    var title = btnstatus.parentNode;
    var message = title.nextElementSibling;
    var date = message.nextElementSibling;

    if(btnstatus.checked){
        title.className = "title2";
        message.className = "message2";
        date.className = "date2";

        $('#editTitle' + id).css("display", "none");
        $('#editContent' + id).css("display", "none");
        $('#editDate' + id).css("display", "none");
        $('#deleteButton').css("display", "inline")    

        if(document.getElementById("edit_title" + id)){
            $('#title'+id).css("display", "inline")
            $('#message'+id).css("display", "inline")
            $('#edit_title'+id).remove();
            $('#edit_message'+id).remove();
        }
    }
    else{
        title.className = "title";
        message.className = "message";
        date.className = "date";
        
        $('#editTitle' + id).css("display", "inline");
        $('#editContent' + id).css("display", "inline");
        $('#editDate' + id).css("display", "inline");
        $('#deleteButton').css("display", "inline")    
    }
}