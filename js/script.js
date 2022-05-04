/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// number of students per page
const pageItems = 9;

//function to show student data per page
function showPage(list, page) {
    let startIndex = (page * pageItems) - pageItems;
    let endIndex = page * pageItems;
   // add elements of student data to ul
    let studentList = document.querySelector('.student-list');
    studentList.innerHTML = '';
   // loop through list of data to get needed student details
    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
            let studentItem = `<li class="student-item cf"><div class="student-details"><img class="avatar" src="${list[i]['picture'].thumbnail}" alt="Profile Picture"><h3>${list[i]['name'].first} ${list[i]['name'].last}</h3><span class="email">${list[i].email}</span></div><div class="joined-details"><span class="date">${list[i]['registered'].date}</span></div></li>`;
            studentList.insertAdjacentHTML('beforeend', studentItem);
        }
    }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

//function to add pagination to bottom of page
function addPagination(list) {
   // needed number of pages from total data vs 9 student profile per page
    let numOfPages = Math.ceil(list.length / 9);
    let linkList = document.querySelector('.link-list');
    linkList.innerHTML = '';
   // loop through pages to create pagination buttons & add under student data
    for (let i = 1; i <= numOfPages; i++) {
        let button = `<li><button type="button">${i}</button></li>`
        linkList.insertAdjacentHTML('beforeend', button);
     }

     let firstButton = document.querySelector('button');
     firstButton.className = 'active';
     // add event to list of items so that each page will show next 9 students data by changing active class per button
     linkList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelector('.active').className ='';
            e.target.className = 'active';
            showPage(list, e.target.textContent);
        }
     })
    
}

// Call functions
showPage(data, 1);
addPagination(data);
