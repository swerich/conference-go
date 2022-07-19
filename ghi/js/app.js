function createCard(name, description, pictureUrl, newStartDate, newEndDate, conferenceLocation) {
    return `
      <div class="col">
        <div class="card">
            <img src="${pictureUrl}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${conferenceLocation}</h6>
                <p class="card-text">${description}</p>
                <div class="card-footer">${newStartDate} - ${newEndDate}</div>
            </div>
        </div>
      </div>
    `;
  }

  window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        // Figure out what to do when the response is bad
      } else {
        const data = await response.json();
  
        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);
          if (detailResponse.ok) {
            const details = await detailResponse.json();
            const name = details.conference.name;
            const description = details.conference.description;
            const pictureUrl = details.conference.location.picture_url;

            const conferenceLocation = details.conference.location.name;


            var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
            var alertTrigger = document.getElementById('liveAlertBtn')

            function alert(message, type) {
            var wrapper = document.createElement('div')
            wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

            alertPlaceholder.append(wrapper)
            }

            if (alertTrigger) {
            alertTrigger.addEventListener('click', function () {
                alert('Nice, you triggered this alert message!', 'success')
            })
            }
            

            const startDate = details.conference.starts;
            let d1 = new Date(startDate)
            let newStartDate = (d1.getMonth()+1) + "/" + d1.getDate() + "/" + d1.getFullYear()
            
            const endDate = details.conference.ends;
            let d2 = new Date(endDate)
            let newEndDate = (d2.getMonth()+1) + "/" + d2.getDate() + "/" + d2.getFullYear()
            
            const html = createCard(name, description, pictureUrl, newStartDate, newEndDate, conferenceLocation);
            const column = document.querySelector('.row');
            column.innerHTML += html;

          }
        }
  
      }
    } catch (e) {
        console.error(e);
        `<div class="alert alert-primary" role="alert">
            An error occured when fetching data!
        </div>`
        
      // Figure out what to do if an error is raised
    }
  
  });

