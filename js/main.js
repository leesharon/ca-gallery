$(document).ready(init)


function init() {
    renderProjs()
    addEventListeners()
}

function addEventListeners() {
    $('.btn-contact-submit').click(onContactSubmit)
}

function renderProjs() {
    const projs = getProjs()
    
    var strHTML = projs.map(proj => `
        <div class="col-md-4 col-sm-6 portfolio-item">\n
          <a onclick="onModalOpen('${proj.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">\n
            <div class="portfolio-hover">\n
              <div class="portfolio-hover-content">\n
                <i class="fa fa-plus fa-3x"></i>\n
              </div>\n
            </div>\n
            <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.png" alt="">\n
          </a>\n
          <div class="portfolio-caption">\n
            <h4>${proj.name}</h4>\n
            <p class="text-muted">${proj.title}</p>\n
          </div>\n
        </div>\n
    `).join('')

    $('.projects-container').html(strHTML)
}

function onModalOpen(projId) {
    const proj = getModalById(projId)

    $('.proj-name').text(`${proj.name}`)
    $('.proj-title').text(`${proj.title}`)
    $('.modal-img').attr('src', `img/portfolio/${proj.id}-full.png`)
    $('.proj-desc').text(`${proj.desc}`)
    $('.proj-date').text(`Date: ${proj.publishedAt}`)
    $('.proj-category').text(`Category: ${proj.labels.join(', ')}`)
    $('.proj-url').attr('href', `${proj.url}`)
}

function onContactSubmit() {
    console.log('hey');
    const userEmail = $('.user-email').val()
    const mailSubject = $('.email-subject').val()
    const mailBody = $('.email-body').val()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=leesharooon@gmail.com&su=${mailSubject}&body=${mailBody + ' from ' + userEmail}`)
    
    $('.user-email').val() = ''
    $('.email-subject').val() = ''
    $('.email-body').val() = ''
}