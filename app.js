// let name = 'Tohid Bin Azam';
// let age  = 30;
// let Location = 'Mirpur'
// localStorage.setItem('location', Location);
// alert(localStorage.getItem('location'));


const holy = [
    {
        name : 'Tohid BIn Azam',
        roll : 02,
        Basa :'Mirpur'
    },
    {
        name : 'Tohid BIn Khan',
        roll : 30,
        Basa :'Sonadanga'
    }
]

let holys = JSON.stringify(holy);
localStorage.setItem('data', holys);
console.log(JSON.parse(localStorage.getItem('data')));
