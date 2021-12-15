const students = [
    {
        roll:1,
        name:"shakil",
        age:20,
        result : [
            {
                bn:40,
                en:45,
                mat:50,
                s:55,
                ss:70,
                rel:90
            }
        ]
    },
    {
      roll:2,
      name:"shakila",
      age:10,
      result : [
        {
            bn:40,
            en:45,
            mat:50,
            s:55,
            ss:70,
            rel:90
        }
    ]
  
  },
  {
      roll:3,
      name:"karim",
      age:25,
      result : [
        {
            bn:40,
            en:45,
            mat:50,
            s:55,
            ss:70,
            rel:90
        }
    ]
  
  },
  {
      roll:4,
      name:"sahin",
      age:30,
      result : [
        {
            bn:40,
            en:45,
            mat:50,
            s:55,
            ss:70,
            rel:90
        }
    ]
  
  },
  {
      roll:5,
      name:"shakil",
      age:20,
      result : [
        {
            bn:40,
            en:45,
            mat:50,
            s:55,
            ss:70,
            rel:90
        }
    ]
  }
];

const phoneBook = [
    {
        name : 'Tohid',
        Number : '01994249463'
    },
    {
        name : 'Sazid',
        Number : '01994249486'
    },
    {
        name : 'Safin',
        Number : '01635249463'
    },
    {
        name : 'Tofa',
        Number : '01968249463'
    },
    {
        name : 'Tarin',
        Number : '01495249463'
    },
]

const devs = [
    {
        id : 01,
        name : 'Sofik Ualla',
        saill : 'Node'
    },
    {
        id : 02,
        name : 'Sadik Ali',
        saill : 'Java'
    },
    {
        id : 03,
        name : 'khorsad Huza',
        saill : 'Go'
    },
    {
        id : 04,
        name : 'Masud Mia',
        saill : 'Phyton'
    },
    {
        id : 05,
        name : 'Akebor Ali',
        saill : 'PHP'
    },
]


let allString = '[[{"roll":1,"name":"shakil","age":20,"result":[{"bn":40,"en":45,"mat":50,"s":55,"ss":70,"rel":90}]},{"roll":2,"name":"shakila","age":10,"result":[{"bn":40,"en":45,"mat":50,"s":55,"ss":70,"rel":90}]},{"roll":3,"name":"karim","age":25,"result":[{"bn":40,"en":45,"mat":50,"s":55,"ss":70,"rel":90}]},{"roll":4,"name":"sahin","age":30,"result":[{"bn":40,"en":45,"mat":50,"s":55,"ss":70,"rel":90}]},{"roll":5,"name":"shakil","age":20,"result":[{"bn":40,"en":45,"mat":50,"s":55,"ss":70,"rel":90}]}],[{"name":"Tohid","Number":"01994249463"},{"name":"Sazid","Number":"01994249486"},{"name":"Safin","Number":"01635249463"},{"name":"Tofa","Number":"01968249463"},{"name":"Tarin","Number":"01495249463"}],[{"id":1,"name":"Sofik Ualla","saill":"Node"},{"id":2,"name":"Sadik Ali","saill":"Java"},{"id":3,"name":"khorsad Huza","saill":"Go"},{"id":4,"name":"Masud Mia","saill":"Phyton"},{"id":5,"name":"Akebor Ali","saill":"PHP"}]]';


const allData = [students, phoneBook, devs];
let dev = JSON.stringify(allData);
document.write(dev);


let returns = JSON.parse(allString);
console.log(returns);
