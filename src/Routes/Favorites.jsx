/*import Artist from "../components/Artist";
import React, { useState } from "react";


const favlist = (
    let favlistJSON = localStorage.getItem('faves');
    let favlist = JSON.parse(favlistJSON);

if (!favlist) {
    favlist = []let favlistJSON = localStorage.getItem('faves');
    let favlist = JSON.parse(favlistJSON);

    if (!favlist) {
        favlist = []
    }
)


    document.querySelector('').innerHTML = renderJobs(favlist);

    function renderJobs(jobs) {
        const html = Artist.map(function (artist, artistId) {

            return `
            <li class='artiesbio'> 
                <h2 id="${X}">${X}</h2>
                <p>Something Here: ${x}</p>
                <p>Something Here: ${x}</p>
            </li>
        `
        });

        return html.join('');

    }


    const clearFavlist = document.getElementById('clear-favlist');
    clearFavlist.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.clear();
        document.querySelector('X').innerHTML =
            `<div class='d-flex mx-auto mt-5'>
  </div>`
    })

    const jobs = document.getElementById('jobs-list');
    const results = document.getElementById('results');

    jobs.addEventListener('click', openModal);

    function openModal(e) {
        if (e.target.tagName === 'H2') {
            const target = e.target.getAttribute('id');
            renderDetail(favlist[target].description);
        }
    }

    function renderDetail(description) {
        let modal = document.getElementById('modal');

        if (modal) {
            modal.remove();
        }

        modal = document.createElement('div');
        modal.id = "modal";
        modal.className = 'the-modal';
        modal.innerHTML = `
    <div class = "modal_container">
        <p>${description}</p> 
    </div>
`;

        results.append(modal);
        renderCancelBtn(modal);
    }


    function closeModal() {
        const modal = document.getElementById('modal');
        modal.removeEventListener('click', closeModal);
        modal.remove();
    }

    function renderCancelBtn(parentEl) {
        const button = document.createElement('span');
        button.addEventListener('click', closeModal);
        button.className = 'cancel';
        button.innerHTML = '&times;';
        parentEl.append(button);
    }

    export default Favorites; */