function templateGenerator(list) {
    let template = '';
    if (list.length) {
        for (let i = 0; i < list.length; i++) {
            template +='<tr>'
            template += '<td>' + list[i].registrationNumber + '</td>'
            template += '<td>' + list[i].surname + '</td>'
            template += '<td>' + list[i].name + '</td>'
            template += '<td>' + list[i].patronymic + '</td>'
            template += '<td>' + list[i].dateBirth + '</td>'
            template += '<td>' + list[i].markEntranceExam1 + '</td>'
            template += '<td>' + list[i].markEntranceExam2 + '</td>'
            template += '<td>' + list[i].markEntranceExam3 + '</td>'
            template += '<td>' + list[i].averageMarkCertificate + '</td>'
            template += '<td>' + list[i].typeMedal + '</td>'
            template += '<td>' + list[i].speciality + '</td>'
            template +='</tr>'
        }
    } else {
        template +='<tr>'
        template += '<td>Not Found</td>';
        template +='</tr>'
    }
    document.querySelector('.list').innerHTML = template;
}
let enrollees=null;
fetch('http://localhost:8001/back?main/database')
.then(function(respance){
    return respance.json()
})
.then(function (data) {
    enrollees = data;
    templateGenerator(enrollees);
});
const $menu=document.querySelector('.menu');
document.querySelector('.account').addEventListener('click', function() {
    if($menu.classList.contains('menuoff')){
        $menu.classList.remove('menuoff'); 
    }else{
        $menu.classList.add('menuoff')
    }
})
const $fieldSurname = document.querySelector('.query_surname');
$fieldSurname.addEventListener('input', function () {
    let query = this.value.toLowerCase();
    let filterdEnrollees = enrollees.filter(function (el) {
        if (el.surname.toLowerCase().indexOf(query) != (-1)) return true;
        else return false;
    });
    templateGenerator(filterdEnrollees);
});
const $fieldSpeciality = document.querySelector('.query_speciality');
$fieldSpeciality.addEventListener('input', function () {
    let query = this.value.toLowerCase();
    let filterdEnrollees = enrollees.filter(function (el) {
        if (el.speciality.toLowerCase().indexOf(query) != (-1)) return true;
        else return false;
    });
    templateGenerator(filterdEnrollees);
});
document.querySelector(".date").addEventListener('click', function (e) {
    if(!e.target.value){
        let filterdEnrollees = enrollees.sort(function (a,b) {
            return a.registrationNumber - b.registrationNumber
        });
         templateGenerator(filterdEnrollees);
    }
   if (e.target.value==1){
    let filterdEnrolleesA = enrollees.sort(function (a,b) {
        let date1=new Date(a.dateBirth.split('.')[2],a.dateBirth.split('.')[1],a.dateBirth.split('.')[0]);
        let date2=new Date(b.dateBirth.split('.')[2],b.dateBirth.split('.')[1],b.dateBirth.split('.')[0]);
        return date1.getTime() - date2.getTime()
    });

    templateGenerator(filterdEnrolleesA.reverse());
   }
   else if(e.target.value==2){
    let filterdEnrolleesB = enrollees.sort(function (a,b) {
        let date1=new Date(a.dateBirth.split('.')[2],a.dateBirth.split('.')[1],a.dateBirth.split('.')[0]);
        let date2=new Date(b.dateBirth.split('.')[2],b.dateBirth.split('.')[1],b.dateBirth.split('.')[0]);
        return date1.getTime() - date2.getTime()
    });
    templateGenerator(filterdEnrolleesB);
}})
document.querySelector(".mark").addEventListener('click', function (e) {
    if(!e.target.value){
        let filterdEnrollees = enrollees.sort(function (a,b) {
            return a.registrationNumber - b.registrationNumber
        });
        templateGenerator(filterdEnrollees);
    }
    if (e.target.value==1){
        let filterdEnrollees = enrollees.sort(function (a,b) {
        let averageA=(a.markEntranceExam1+a.markEntranceExam2+a.markEntranceExam3)/3;
        let averageB=(b.markEntranceExam1+b.markEntranceExam2+b.markEntranceExam3)/3;
        return averageA - averageB
    });
    templateGenerator(filterdEnrollees.reverse());
    }
    else if(e.target.value==2){
        let filterdEnrollees = enrollees.sort(function (a,b) {
           let averageA=(a.markEntranceExam1+a.markEntranceExam2+a.markEntranceExam3)/3;
           let averageB=(b.markEntranceExam1+b.markEntranceExam2+b.markEntranceExam3)/3;
           return averageA - averageB
        });
        templateGenerator(filterdEnrollees);
    }
    if (e.target.value==3){
        let filterdEnrollees = enrollees.sort(function (a,b) {
        return a.markEntranceExam1 - b.markEntranceExam1
    });
    templateGenerator(filterdEnrollees.reverse());
    }
    else if(e.target.value==4){
        let filterdEnrollees = enrollees.sort(function (a,b) {
        return a.markEntranceExam - b.markEntranceExam1
    });   
    templateGenerator(filterdEnrollees);
    }
    if (e.target.value==5){
        let filterdEnrollees = enrollees.sort(function (a,b) {
        return a.markEntranceExam2 - b.markEntranceExam2
    });
    templateGenerator(filterdEnrollees.reverse());
    }
    else if(e.target.value==6){
        let filterdEnrollees = enrollees.sort(function (a,b) {
        return a.markEntranceExam2 - b.markEntranceExam2
    });   
    templateGenerator(filterdEnrollees);
    }
    if (e.target.value==7){
        let filterdEnrollees = enrollees.sort(function (a,b) {
        return a.markEntranceExam3 - b.markEntranceExam3
    });
    templateGenerator(filterdEnrollees.reverse());
    }
    else if(e.target.value==8){
        let filterdEnrollees = enrollees.sort(function (a,b) {
        return a.markEntranceExam3 - b.markEntranceExam3
    });   
    templateGenerator(filterdEnrollees);
    }
})
 document.querySelector(".mark_cerificate").addEventListener('click', function (e) {
    if(!e.target.value){
        let filterdEnrollees = enrollees.sort(function (a,b) {
            return a.registrationNumber - b.registrationNumber
        });
        templateGenerator(filterdEnrollees);
    }
    if (e.target.value==1){
        let filterdEnrollees = enrollees.sort(function (a,b) {
            return a.averageMarkCertificate - b.averageMarkCertificate
     });
    templateGenerator(filterdEnrollees.reverse());
    }
    else if(e.target.value==2){
        let filterdEnrollees = enrollees.sort(function (a,b) {
            return a.averageMarkCertificate - b.averageMarkCertificate
    });
    templateGenerator(filterdEnrollees);
}})
document.querySelector(".medal").addEventListener('click', function (e) {
    if(!e.target.value){
        let filterdEnrollees = enrollees.sort(function (a,b) {
            return a.registrationNumber - b.registrationNumber
        });
        templateGenerator(filterdEnrollees);
    }
    if (e.target.value==1){
        let filterdEnrollees = enrollees.filter(function (el) {
        return el.typeMedal==="NO"? true: false
    });
     templateGenerator(filterdEnrollees);
    }
    if (e.target.value==2){
        let filterdEnrollees = enrollees.filter(function (el) {
        return el.typeMedal==="GOLD"? true: false
    });
     templateGenerator(filterdEnrollees);
    }
    if (e.target.value==3){
        let filterdEnrollees = enrollees.filter(function (el) {
        return el.typeMedal==="SILVER"? true: false
    });
    templateGenerator(filterdEnrollees);
    }
 });
 let $btn = document.getElementById("btn_load");
 let $modal = document.getElementById("load_modal");
 let $span = document.getElementsByClassName("close_modal")[0];
 let filesForLoad=null;
 $btn.onclick = function () {
    if(document.querySelector('.role').innerHTML=='Admin'){
    $modal.style.display = "block";
    fetch('http://localhost:8001/back?main/loadFiles')
        .then(function(respance){
        return respance.json()
    })
    .then(function (data) {
        filesForLoad = data;
        console.log(filesForLoad);
        templateGeneratorFileName(filesForLoad);
    });
    }else{
        alert('Your status is Anonymous, in order to gain access you need to have the status of Admin')
    }
}
function templateGeneratorFileName(list){
    let template = '';
    if (list.fileNames.length) {
        for (let i = 0; i < list.fileNames.length; i++) {
            template += '<li class="element" data-index="'+(i+1)+'" status="off">' + list.fileNames[i] + '</li>'
        }
    } else {
        template += '<li>Not Found files json for load</li>';
    }
    document.querySelector('.listFiles').innerHTML = template;
 }
$span.onclick = function () {
    $modal.style.display = "none";
}

document.querySelector('.listFiles').addEventListener('click',function (e) {
    if(e.target.getAttribute('status') =="off"){
    e.target.setAttribute("status", "on"); 
    e.target.style.backgroundColor="#777";
    e.target.style.color="#fff";
    }else{   
        e.target.style.backgroundColor="#f5f5f5";
        e.target.style.color="#506a6b";
        e.target.setAttribute("status", "off");
    }
})

let $modal2 = document.getElementById("load_modal2");
let $span2 = document.getElementsByClassName("close_modal2")[0];
let $btnconfirm = document.getElementById("btn_open");
$btnconfirm.onclick = function () {
    $modal2.style.display = "block";
    let array=document.querySelectorAll('.element');
    let indexOffFilename =[];
    for (let index = 0; index <array.length; index++) {
        if( array[index].getAttribute('status') =="on"){
            indexOffFilename.push(index);
        };      
    }
    if(indexOffFilename.length==1){
        document.querySelector('.confirm').innerHTML="Are you sure you want to upload the file:";
        document.getElementById('btn_confirm').style.display="block";
        document.querySelector('.filename').innerHTML = array[indexOffFilename[0]].innerHTML;
        document.querySelector('.filename').style.display="block";
    }else{
        document.querySelector('.confirm').innerHTML="You need to select one file to upload and no more";
        document.getElementById('btn_confirm').style.display="none";
        document.querySelector('.filename').style.display="none";
    }
    indexOffFilename.length=0;    
}
$span2.onclick = function () {
    $modal2.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == $modal2) {
        $modal2.style.display = "none";
    }
}

document.getElementById('btn_confirm').addEventListener('click',function (e) {
    let url ='http://localhost:8001/back?main/loadFiles/load/';
    url=url+document.querySelector('.filename').innerHTML;
    fetch(url)
    .then(function(respance){
        return respance.json()
    })
    .then(function (data) {
        enrollees = data;
        console.log(enrollees);
        templateGenerator(enrollees);
    });
   alert('Database loaded')
   $modal.style.display = "none";
})
let modalSave = document.getElementById("btn_modal_save");
let btnSave = document.getElementById("btn_save");
let spanSave = document.getElementsByClassName("close_modal_window_save")[0];
btnSave.onclick = function () {
    if(document.querySelector('.role').innerHTML=='Admin'){
        modalSave.style.display = "block";
    }else{
        alert('Your status is Anonymous, in order to gain access you need to have the status of Admin')
    }
}
document.getElementById('btn_confirm_save').addEventListener('click',function(e){
    let res=JSON.stringify(enrollees).replace(/[^a-z0-9-_\s]/gi, ' ').replace(/^ +| +$|( ) +/g,"$1").replace(/ /ig, '/');
    let url ='http://localhost:8001/back?main/save/'+res+'/size/'+enrollees.length;
    console.log(res);
    fetch(url)
    .then(function(respance){
        return respance.json()
    })
    alert('Your database has been saved to a file');
    modalSave.style.display = "none";
})
spanSave.onclick = function () {
   modalSave.style.display = "none";
}
var modalAdd = document.getElementById("btn_modal_add");
var btnAdd = document.getElementById("btn_add");
var spanAdd = document.getElementsByClassName("close_modal_window_add")[0];
btnAdd.onclick = function () {
    if(document.querySelector('.role').innerHTML=='Admin'){
        modalAdd.style.display = "block";
    }else{
        alert('Your status is Anonymous, in order to gain access you need to have the status of Admin')
    }
}
spanAdd.onclick = function () {
   modalAdd.style.display = "none";
}
document.getElementById('btn_confirm_add').addEventListener('click',function(e){
    let isProblem=false;
    let arrProblems=[];
    if(document.querySelector('.surname').value.length && /[0-9]/.test(document.querySelector('.surname').value)==false); 
    else{
        isProblem=true;
        arrProblems.push('Surname');
    }
    if(document.querySelector('.name') && /[0-9]/.test(document.querySelector('.name').value)==false);
    else{
        isProblem=true;
        arrProblems.push('Name');
    }
    if(document.querySelector('.patronymic').value.length && /[0-9]/.test(document.querySelector('.patronymic').value)==false);
    else{
        isProblem=true;
        arrProblems.push('Patronymic');
    }
    if(Date.parse(''+document.querySelector('.dateBirth').value.split('.')[2]+'-'+document.querySelector('.dateBirth').value.split('.')[1]+'-'+document.querySelector('.dateBirth').value.split('.')[0])  && ''+document.querySelector('.dateBirth').value.split('.')[2]+'-'+document.querySelector('.dateBirth').value.split('.')[1]+'-'+document.querySelector('.dateBirth').value.split('.')[0].indexOf('undefined')!=-1){
       
    }else{
        
        isProblem=true;
        arrProblems.push('Date Birth');
    }
    console.log(document.querySelector('.exam1').value.length);
    if(document.querySelector('.exam1').value.length && document.querySelector('.exam1').value*1>0 && document.querySelector('.exam1').value*1<100);
    else{
        isProblem=true;
        arrProblems.push('Mark Entrance Exam1');
    }
    if(document.querySelector('.exam2').value.length && document.querySelector('.exam2').value*1>0 && document.querySelector('.exam2').value*1<100);
    else{
        isProblem=true;
        arrProblems.push('Mark Entrance Exam2');
    }
    if(document.querySelector('.exam3').value.length && document.querySelector('.exam3').value*1>0 && document.querySelector('.exam3').value*1<100);
    else{
        isProblem=true;
        arrProblems.push('Mark Entrance Exam3');
    }
    if(document.querySelector('.averageMarkCertificate').value.length && document.querySelector('.averageMarkCertificate').value*1>0 && document.querySelector('.averageMarkCertificate').value*1<12);
    else{
        isProblem=true;
        arrProblems.push('Average Mark Certificate');
    }
    if(document.querySelector('.add_type_medal').value !='Select');
    else{
        isProblem=true;
        arrProblems.push('Type Medal');
    }
    if(document.querySelector('.add_speciality').value !='Select');
    else{
        isProblem=true;
        arrProblems.push('Speciality');
    }
    if(!isProblem){ 
        var list = { registrationNumber: enrollees.length+1, 
            name: document.querySelector('.name').value.trim(), 
            surname: document.querySelector('.surname').value.trim(), 
            patronymic: document.querySelector('.patronymic').value.trim(),
            dateBirth: document.querySelector('.dateBirth').value,
            markEntranceExam1:document.querySelector('.exam1').value*1,
            markEntranceExam2:document.querySelector('.exam2').value*1,
            markEntranceExam3:document.querySelector('.exam3').value*1,
            averageMarkCertificate:document.querySelector('.averageMarkCertificate').value*1,
            typeMedal:document.querySelector('.add_type_medal').value,
            speciality:document.querySelector('.add_speciality').value
        };
        enrollees.push(list);   
        console.log(enrollees);
        templateGenerator(enrollees);
        modalAdd.style.display = "none";
    alert('Your enrollee has been successfully added');
    }else{
        alert('Data entered incorrectly,for example,'+arrProblems);
        arrProblems.length=0;
    }
})
var modalEdit = document.getElementById("btn_modal_edit");
var btnEdit = document.getElementById("btn_edit");
var spanEdit = document.getElementsByClassName("close_modal_window_edit")[0];
btnEdit.onclick = function () {
    if(document.querySelector('.role').innerHTML=='Admin'){
    modalEdit.style.display = "block";
    templateGenerator2(enrollees);
    for (let i = 0; i < enrollees.length; i++) {
        document.querySelector('.edit_del_enrollee_'+i+'').addEventListener('click',function(){
         let e=document.querySelector('.edit_del_enrollee_'+i+'')
            if(e.getAttribute('status') =="off"){
                e.setAttribute("status", "on");
                e.style.backgroundColor="#dc143c";
                }else{   
                    e.style.backgroundColor="#a3a3a3";
                    e.setAttribute("status", "off");
                }
        })        
    }
    }else{
        alert('Your status is Anonymous, in order to gain access you need to have the status of Admin')
    }
}
function templateGenerator2(list) {
    let template = '';
    if (list.length) {
        for (let i = 0; i < list.length; i++) {
            template +='<tr>'
            template += '<td>' +'<input data-row class= "edit_number editable" value="'+ list[i].registrationNumber +'"></td>'
            template += '<td>' +'<input class= "edit_fio editable" value="'+list[i].surname + '"></td>'
            template += '<td>' +'<input class= "edit_fio editable" value="'+list[i].name + '"></td>'
            template += '<td>' +'<input class= "edit_fio editable" value="'+list[i].patronymic + '"></td>'
            template += '<td>' +'<input class= "edit_fio editable" value="'+list[i].dateBirth + '"></td>'
            template += '<td>' +'<input class= "edit_number editable" value="'+list[i].markEntranceExam1 + '"></td>'
            template += '<td>' +'<input class= "edit_number editable" value="'+list[i].markEntranceExam2 + '"></td>'
            template += '<td>' +'<input class= "edit_number editable" value="'+list[i].markEntranceExam3 + '"></td>'
            template += '<td>' +'<input class= "edit_number editable" value="'+list[i].averageMarkCertificate + '"></td>'
            template += '<td> <select name="type_medal" class="edit_medal editable" > <option value="'+list[i].typeMedal+'">'+list[i].typeMedal+'</option><option value="NO">NO</option><option value="GOLD">GOLD</option><option value="SILVER">SILVER</option></select></td>'
            template += '<td><select name="speciality" class="edit_speciality editable"><option value="'+list[i].speciality+'">'+list[i].speciality+'</option><option value="01411 Secondary education (Physical culture)">01411 Secondary education (Physical culture)</option><option value="022 Design">022 Design</option><option value="029 Information, library and archival business">029 Information, library and archival business</option><option value="032 History and archeology">032 History and archeology</option><option value="033 Philosophy">033 Philosophy</option><option value="034 Culturology">034 Culturology</option><option value="035 Philology">035 Philology</option><option value="051 Economy">051 Economy</option><option value="053 Psychology">053 Psychology</option><option value="061 Journalism">061 Journalism</option><option value="071 Accounting and taxation">071 Accounting and taxation</option><option value="072 Finance, banking and insurance">072 Finance, banking and insurance</option><option value="073 Management">073 Management</option><option value="075 Marketing">075 Marketing</option><option value="076 Entrepreneurship, trade and exchange activity">076 Entrepreneurship, trade and exchange activity</option><option value="101 Ecology">101 Ecology</option><option value="104 Physics and astronomy">104 Physics and astronomy</option><option value="113 Applied Mathematics">113 Applied Mathematics</option><option value="121 Software engineering">121 Software engineering</option><option value="122 Computer Science">122 Computer Science</option><option value="123 Computer Engineering">123 Computer Engineering</option><option value="124 System analysis">124 System analysis</option><option value="125 Cybersecurity">125 Cybersecurity</option><option value="126 Information systems and technologies">126 Information systems and technologies</option><option value="131 Applied mechanics">131 Applied mechanics</option><option value="132 Materials science">132 Materials science</option><option value="133 Industrial engineering">133 Industrial engineering</option><option value="136 Metallurgy">136 Metallurgy</option><option value="141 Power industry, electrical engineering and electromechanics">141 Power industry, electrical engineering and electromechanics</option><option value="143 Nuclear power">143 Nuclear power</option><option value="144 Thermal power engineering">144 Thermal power engineering</option><option value="151 Automation and computer-integrated technologies">151 Automation and computer-integrated technologies</option><option value="152 Metrology and information-measuring technology">152 Metrology and information-measuring technology</option><option value="161 Chemical technology and engineering">161 Chemical technology and engineering</option><option value="163 Biomedical Engineering">163 Biomedical Engineering</option><option value="171 Electronics">171 Electronics</option><option value="172 Telecommunications and radio engineering">172 Telecommunications and radio engineering</option><option value="183 Environmental Technologies">183 Environmental Technologies</option><option value="192 Life and civil engineering">192 Life and civil engineering</option><option value="226 Pharmacy, industrial pharmacy">226 Pharmacy, industrial pharmacy</option><option value="231 Social work">231 Social work</option><option value="274 Road transport">274 Road transport</option><option value="275 Transport technologies (by types)">275 Transport technologies (by types)</option><option value="281 Public administration and administration">281 Public administration and administration</option><option value="291 International relations, public communications and regional studies">291 International relations, public communications and regional studies</option><option value="292 International economic blueprints">292 International economic blueprints</option></select></td>'
            template +='<td><button  class="edit_del_enrollee_'+i+'" value="'+i+'" status="off">Delete</button></td></tr>'
        }
    } else {
        template +='<tr>'
        template += '<td>Not Found</td>';
        template +='</tr>'
    }
    document.querySelector('.edit_enrollees').innerHTML = template;
}
spanEdit.onclick = function () {
   modalEdit.style.display = "none";
}
document.getElementById('btn_confirm_edit').addEventListener('click',function(){
    let editable=document.querySelectorAll(".editable");
    let k=0;
    for (let i = 0; i < enrollees.length; i++) {
        enrollees[i].registrationNumber=editable[(i+k)].value
        k+=1;
        enrollees[i].surname=editable[(i+k)].value;
        k+=1;
        enrollees[i].name=editable[(i+k)].value;
        k+=1;
        enrollees[i].patronymic=editable[(i+k)].value;
        k+=1;
        enrollees[i].dateBirth=editable[(i+k)].value;
        k+=1;
        enrollees[i].markEntranceExam1=editable[(i+k)].value;
        k+=1;
        enrollees[i].markEntranceExam2=editable[(i+k)].value;
        k+=1;
        enrollees[i].markEntranceExam3=editable[(i+k)].value;
        k+=1;
        enrollees[i].averageMarkCertificate=editable[(i+k)].value;
        k+=1;
        enrollees[i].typeMedal=editable[(i+k)].value;
        k+=1;
        enrollees[i].speciality=editable[(i+k)].value;
    }
    for (let i = 0; i < enrollees.length; i++) {
         let e=document.querySelector('.edit_del_enrollee_'+i+'')
            if(e.getAttribute('status') =="on"){
                enrollees.splice(e.value,1)
            }       
    }
    templateGenerator(enrollees);
    alert('Database changed');
    modalEdit.style.display = "none";
})
let btnLogin=document.querySelector('.login');
btnLogin.addEventListener('click',function(){
   let user=document.querySelector('.user').value;
   let password=document.querySelector('.password').value;
   let loginProfile;
   console.log(user+'--'+password);
   url='http://localhost:8001/back?main/login/'+user+'/'+password
   console.log(url);
   fetch(url)
    .then(function(respance){
        return respance.json()
    })
    .then(function (data) {
        loginProfile = data;  
    if(loginProfile.confirm=='true'){
        document.querySelector('.role').innerHTML='Admin';
        document.querySelector('.box2').style.display ="none";
    }else{
        document.querySelector('.eror').style.display="block";
    }
    });
})