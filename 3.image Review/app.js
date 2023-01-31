const review=[
    {
        id:1,
        name:"susan smith",
        job:"web developer",
        img:"https://tse1.mm.bing.net/th?id=OIP.XTpjqTqqg5WuHVRJ8LA9-AHaEK&pid=Api&P=0",
        text:"Find Person Text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection. Thousands of new, high-quality pictures added every day",
    },
    {
        id: 2,
        name: "gyaan",
        job: "web developer",
        img: "https://www.storypick.com/wp-content/uploads/2015/04/Cover-Image-Interesting-Person1.jpg",
        text: "Find Person Text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection. Thousands of new, high-quality pictures added every day",
    },
    {
        id: 3,
        name: "aakash",
        job: "web developer",
        img: "https://tse3.mm.bing.net/th?id=OIP.OSSG9_NVCnX5E2A6ESG4SQHaD4&pid=Api&P=0",
        text: "Find Person Text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection. Thousands of new, high-quality pictures added every day",
    },
    {
        id: 4,
        name: "sumit ",
        job: "web developer",
        img: "https://tse3.mm.bing.net/th?id=OIP.UuWUVNImm_7nNDHxkVft4gHaEK&pid=Api&P=0",
        text: "Find Person Text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection. Thousands of new, high-quality pictures added every day",
    },
    {
        id: 5,
        name: "dev",
        job: "web developer",
        img: "https://tse2.mm.bing.net/th?id=OIP.sVwKdKqNJIokHPBd4vGtdQHaEK&pid=Api&P=0",
        text: "Find Person Text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection. Thousands of new, high-quality pictures added every day",
    },
    {
        id: 6,
        name: "kalash",
        job: "web developer",
        img: "https://i.ebayimg.com/00/s/MTAyNFg1NzI=/z/JXcAAOSw--Ne40Nf/$_86.JPG",
        text: "Find Person Text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection. Thousands of new, high-quality pictures added every day",
    },
    
];

// selected items
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");


const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");

// set starting item
let currentItem=0

// load initial item
window.addEventListener('DOMContentLoaded',function(){
    const item=review[currentItem];
    img.src=item.img;
})