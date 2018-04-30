var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]
for(var i = 0; i<students.length; i++){
    console.log(students[i].first_name+" "+students[i].last_name);
}
var users = {
    
        'Students': [ 
            {first_name:  'Michael', last_name : 'Jordan'},
            {first_name : 'John', last_name : 'Rosales'},
            {first_name : 'Mark', last_name : 'Guillen'},
            {first_name : 'KB', last_name : 'Tonel'}
        ],
    
    
        'Instructors': [
            {first_name : 'Michael', last_name : 'Choi'},
            {first_name : 'Martin', last_name : 'Puryear'}
        ]
    
}
for(let x in users) {
    console.log(x);
    for( let y in users[x]){
        var name = users[x][y].first_name+' '+users[x][y].last_name;
        y++;
        console.log(y+' - '+name+' - '+(name.length-1));
        y--;
    }
}

 

