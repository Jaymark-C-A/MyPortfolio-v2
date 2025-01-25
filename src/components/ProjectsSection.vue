<template>
    <!-- Project -->
    <div v-if="currentView === 'project'" class="all">
      <div :class="[containerClass, 'container-fluid','bg-light','rounded-3']">
          <div class="form-group my-2" >
              <div class="logo fw-bold py-1 d-flex justify-content-between">
                  <div class="toggle d-flex justify-content-between gap-2">
                      <button @click="currentView = 'project'" class="px-2 py-1 bg-primary rounded-3" style="font-size: 14px; font-weight: 600; border: none;" type="button">Projects <i class="fas fa-circle-arrow-right"></i></button>
                      <button @click="currentView = 'contact'" class="px-2 py-1 rounded-3" style="font-size: 14px; font-weight: 600; border: none;" type="button">Contact <i class="fas fa-circle-arrow-right"></i></button>
                      <button @click="currentView = 'fb'" class="px-2 py-1 rounded-3" style="font-size: 14px; font-weight: 600; border: none;" type="button">FB Page <i class="fas fa-circle-arrow-right"></i></button>
                  </div>
                  <div class="clock text-primary d-none d-md-block">{{ time }}</div>
              </div>
          </div>
      </div>

      <div class="container-fluid mb-2">
        <div class="row">
          <div class="col-lg-12 p-0">
            <img src="/public/img/front.png" alt="front" class="rounded-4" width="100%" height="auto" style="border:1px solid #f8f9fa;">
          </div>
        </div>
      </div>

      <div :class="[containerClass, 'container-fluid','project',' bg-light','rounded-4','mb-2']">
        <div class="row p-3 p-lg-2">
          <div class="col-lg-6 rounded-4 d-none d-lg-block" style="background-image: url(./public/img/tms.png); background-size: cover; height: 430px; border: 1px solid #f8f9fa;">
          </div>
          <div class="col-lg-6 rounded-4 d-lg-none d-lg-block" style="background-image: url(/public/img/tms.png); background-size: contain; height: 220px; border: 1px solid #f8f9fa;">
          </div>
          <div class="col-lg-6 p-0 px-lg-4 mt-3">
              <div class="form-group fs-6">
                  <p class="fw-bold mb-2">Capstone Project - Transaction Monitoring System (TMS) for Olongapo City National High School ･ 2024</p>
                  <p class="" style="font-size: 12px;">The Transaction Monitoring System (TMS) enhances visitor management, ticketing, and feedback with <span class="text-primary fw-bold"> real-time tracking, color-coded tickets, and a queuing system </span> for improved efficiency. It also features a comprehensive monitoring tool to oversee transactions, ensuring better management and decision-making. Developed as part of our capstone program, TMS showcases our commitment to creating user-focused and efficient solutions.</p>
              </div>
              <div class="container-fluid p-0">
                <div class="d-flex flex-wrap justify-content-start gap-1 mb-3">
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 55px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      HTML
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 45px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      CSS
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 80px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      JavaScript
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 80px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Bootstrap
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 45px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      PHP
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 60px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Laravel
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 80px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Material UI
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 60px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      MySQL
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 55px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      JSON
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 50px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Ajax
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 60px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      JQuery
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 60px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      SMTP
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 65px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      VScode
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 70px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Postman
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-start gap-2">
                  <a href="#"  :class="[containerClass, 'btn','py-0','px-4']" style="color: #000;"><i class="fab fa-github"></i></a>
                  <a href="#" :class="[containerClass, 'btn','py-0','px-4']" style="color: #000;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <span class="bg-primary px-3 text-white rounded-4 h-25" style="font-size: 10px; letter-spacing: 1px;">Capstone Program</span>
              </div>


          </div>
        </div>
      </div>

      <div :class="[containerClass, 'container-fluid','project',' bg-light','rounded-4','mb-2']">
        <div class="row p-3 p-lg-2">
          <div class="col-lg-6 rounded-4 d-none d-lg-block" style="background-image: url(/public/img/portfolio-v2.png); background-size: cover; height: 240px; border: 1px solid #f8f9fa;"></div>
          <div class="col-lg-6 rounded-4 d-lg-none d-lg-block" style="background-image: url(/public/img/portfolio-v2.png); background-size: contain; height: 220px; border: 1px solid #f8f9fa;"></div>

          <div class="col-lg-6 p-0 px-lg-4 pt-2">
              <div class="form-group fs-6">
                  <p class="fw-bold mb-2">Personalized - Portfolio V2 ･ 2025</p>
                  <p class="" style="font-size: 12px;">My second personal portfolio, developed during my fourth year of college, represents the launchpad for my journey as a developer, showcasing my skills, projects, and achievements.</p>
              </div>

              <div class="container-fluid p-0 mb-3">
                <div class="d-flex flex-wrap justify-content-start gap-1">
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 55px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      HTML
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 45px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      CSS
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 80px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Bootstrap
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 80px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      TypeScript
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 40px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Vite
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 45px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Vue
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-start gap-2">
                  <a href="#"  :class="[containerClass, 'btn','py-0','px-4']" style="color: #000;"><i class="fab fa-github"></i></a>
                  <a href="#" :class="[containerClass, 'btn','py-0','px-4']" style="color: #000;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <span class="bg-primary px-3 text-white rounded-4 h-25" style="font-size: 10px; letter-spacing: 1px;">Personal Project</span>
              </div>

          </div>
        </div>
      </div>

      <div :class="[containerClass, 'container-fluid','project',' bg-light','rounded-4','mb-2']">
        <div class="row p-3 p-lg-2">
          <div class="col-lg-6 rounded-4 d-none d-lg-block" style="background-image: url(/public/img/portfolio.png); background-size: cover; height: 230px; border: 1px solid #f8f9fa;"></div>
          <div class="col-lg-6 rounded-4 d-lg-none d-lg-block" style="background-image: url(/public/img/portfolio.png); background-size: contain; height: 220px; border: 1px solid #f8f9fa;"></div>

          <div class="col-lg-6 p-0 px-lg-4 pt-2">
              <div class="form-group fs-6">
                  <p class="fw-bold mb-2">Personalized - Portfolio V1 ･ 2023</p>
                  <p class="" style="font-size: 12px;">Created my first personal portfolio during my 3rd year of college to showcase my skills, projects, and achievements, marking the start of my journey as a developer.</p>
              </div>

              <div class="container-fluid p-0 mb-3">
                <div class="d-flex flex-wrap justify-content-start gap-1">
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 55px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      HTML
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 45px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      CSS
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 80px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Bootstrap
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 80px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      TypeScript
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 40px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Vite
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 45px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Vue
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-start gap-2">
                  <a href="#"  :class="[containerClass, 'btn','py-0','px-4']" style="color: #000;"><i class="fab fa-github"></i></a>
                  <a href="#" :class="[containerClass, 'btn','py-0','px-4']" style="color: #000;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <span class="bg-primary px-3 text-white rounded-4 h-25" style="font-size: 10px; letter-spacing: 1px;">Personal Project</span>
              </div>

          </div>
        </div>
      </div>


      <div :class="[containerClass, 'container-fluid','project',' bg-light','rounded-4','mb-2']">
        <div class="row p-3 p-lg-2">
          <div class="col-lg-6 rounded-4 d-none d-lg-block" style="background-image: url(/public/img/CarRental.png); background-size: contain; height: 245px; border: 1px solid gray;"></div>
          <div class="col-lg-6 rounded-4 d-lg-none d-lg-block" style="background-image: url(/public/img/CarRental.png); background-size: contain; height: 220px;"></div>
          <div class="col-lg-6 p-0 px-lg-4 pt-2">
              <div class="form-group fs-6">
                  <p class="fw-bold mb-2">Personalized - A webiste built using Bootstrap and JavaScript for a CarRental Services ･ 2022</p>
                  <p class="" style="font-size: 12px;">A stylish and user-friendly car rental service, seamlessly powered by HTML and JavaScript, and designed with Bootstrap.</p>
              </div>

              <div class="container-fluid p-0 mb-3">
                <div class="d-flex flex-wrap justify-content-start gap-1">
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 55px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      HTML
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 45px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      CSS
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 80px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Bootstrap
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 80px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      JavaScript
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-start gap-2">
                  <a href="#"  :class="[containerClass, 'btn','py-0','px-4']" style="color: #000;"><i class="fab fa-github"></i></a>
                  <a href="#" :class="[containerClass, 'btn','py-0','px-4']" style="color: #000;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <span class="bg-primary px-3 text-white rounded-4 h-25" style="font-size: 10px; letter-spacing: 1px;">Personal Project</span>
              </div>

          </div>
        </div>
      </div>

      <div :class="[containerClass, 'container-fluid','project',' bg-light','rounded-4','mb-2']">
        <div class="row p-3 p-lg-2">
          <div class="col-lg-6 rounded-4 d-none d-lg-block" style="background-image: url(/public/img/Cleanex.png); background-size: contain; height: 225px; border: 1px solid gray;"></div>
          <div class="col-lg-6 rounded-4 d-lg-none d-lg-block" style="background-image: url(/public/img/Cleanex.png); background-size: contain; height: 220px;"></div>
          <div class="col-lg-6 p-0 px-lg-4 pt-2">
              <div class="form-group fs-6">
                  <p class="fw-bold mb-2">Personalized - A webiste built using Bootstrap and JavaScript for a Cleaning Services ･ 2022</p>
                  <p class="" style="font-size: 12px;">An efficient and polished cleaning service platform, expertly built with HTML and JavaScript, and styled using Bootstrap.</p>
              </div>

              <div class="container-fluid p-0 mb-3">
                <div class="d-flex flex-wrap justify-content-start gap-1">
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 55px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      HTML
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 45px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      CSS
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 80px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      Bootstrap
                    </p>
                  </div>
                  <div :class="[containerClass, 'd-flex','justify-content-center','align-items-center','bg-light','rounded-2']" style="width: 80px; border: 1px solid gray;">
                    <p class="m-0 py-1" style="font-size: 12px;">
                      JavaScript
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-start gap-2">
                  <a href="#"  :class="[containerClass, 'btn','py-0','px-4']" style="color: #000;"><i class="fab fa-github"></i></a>
                  <a href="#" :class="[containerClass, 'btn','py-0','px-4']" style="color: #000;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <span class="bg-primary px-3 text-white rounded-4 h-25" style="font-size: 10px; letter-spacing: 1px;">Personal Project</span>
              </div>

          </div>
        </div>
      </div>
    </div>


    <!-- Contact -->
    <div v-if="currentView === 'contact'">
        <div :class="[containerClass, 'container-fluid','bg-light','rounded-3']" >
            <div class="form-group my-2" >
                <div class="logo fw-bold py-1 d-flex justify-content-between">
                    <div class="toggle d-flex justify-content-between gap-2">
                        <button @click="currentView = 'project'" class="px-2 py-1 rounded-3" style="font-size: 14px; font-weight: 600; border: none;" type="button">Projects <i class="fas fa-circle-arrow-right"></i></button>
                        <button @click="currentView = 'contact'" class="px-2 py-1 bg-primary rounded-3" style="font-size: 14px; font-weight: 600; border: none;" type="button">Contact <i class="fas fa-circle-arrow-right"></i></button>
                        <button @click="currentView = 'fb'" class="px-2 py-1 rounded-3" style="font-size: 14px; font-weight: 600; border: none;" type="button">FB Page <i class="fas fa-circle-arrow-right"></i></button>
                    </div>
                    <div class="clock text-primary d-none d-md-block">{{ time }}</div>
                </div>
            </div>
        </div>
        <div :class="[containerClass, 'container-fluid', 'contact', 'bg-light', 'rounded-4', 'mb-2']" style="border: 1px solid white;">
        <!-- Contact interface content -->
        <div  class="container-fluid py-4">
            <div class="row">
              <div class="col-lg-12" style="margin: 0px auto;">
                <h2 class="mb-3 text-center fw-bold">Send me a message!</h2>
                <form>
                  <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" id="name" class="form-control" placeholder="Enter your name" />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-control" placeholder="Enter your email" />
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea id="message" class="form-control" rows="4" placeholder="Your message"></textarea>
                  </div>
                  <button type="submit" class="form-control btn btn-primary">Send</button>
                </form>
              </div>
              <div class="col-lg-12">
                <div class="py-1 px-4 my-3" style="border: 1px solid gray; border-radius: 10px;">
                  <p class="my-2 fs-2 fw-bolder text-primary">Get in touch.</p>
                  <p class="small">Considering to be in contact with me regarding a project? Perhaps collaboration? Or just about anything?</p>
                </div>
                <div class="py-1 px-4" style="border: 1px solid gray; border-radius: 10px;">
                  <p class="my-2 fs-3 fw-bold text-primary">Seeking Opportunities.</p>
                  <p class="small">Through hands-on experience with various projects, I have refined my ability to deliver customized solutions that align with client needs. While I have not yet had formal job experience, I am confident in my skills and readiness to tackle challenging opportunities that align with my interests.</p>
                  <p class="small">With the utmost sincerity, I am a dedicated programmer, eager to contribute my skills while seeking financial stability.</p>
                  <p class="medium text-primary"><i class="fas fa-map-marker-alt fs-6 me-2"></i>Currently based in the Philippines.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>  


      <!-- FB Page -->
      <div v-if="currentView === 'fb'">
        <div :class="[containerClass, 'container-fluid','bg-light','rounded-3']">
            <div class="form-group my-2" >
                <div class="logo fw-bold py-1 d-flex justify-content-between">
                    <div class="toggle d-flex justify-content-between gap-2">
                        <button @click="currentView = 'project'" class="px-2 py-1 rounded-3" style="font-size: 14px; font-weight: 600; border: none;" type="button">Projects <i class="fas fa-circle-arrow-right"></i></button>
                        <button @click="currentView = 'contact'" class="px-2 py-1 rounded-3" style="font-size: 14px; font-weight: 600; border: none;" type="button">Contact <i class="fas fa-circle-arrow-right"></i></button>
                        <button @click="currentView = 'fb'" class="px-2 py-1 bg-primary rounded-3" style="font-size: 14px; font-weight: 600; border: none;" type="button">FB Page <i class="fas fa-circle-arrow-right"></i></button>
                    </div>
                    <div class="clock text-primary d-none d-md-block">{{ time }}</div>
                </div>
            </div>
        </div>
        
        <div :class="[containerClass, 'container-fluid', 'contact', 'rounded-4', 'mb-2']" style="border: 1px solid white;">
          <div class="d-flex justify-content-end align-items-center">
            <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61571340871443&tabs=timeline&width=800&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
              width="615" 
              height="705"
              class="m-0 pt-1 pb-4"  
              style="border:none;overflow:hidden;" 
              scrolling="no" 
              frameborder="0" 
              allowfullscreen="true" 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
          </div>

        </div>
    </div>  

  </template>
  
  <script lang="ts">
  import { defineComponent, computed, ref, onMounted, onUnmounted } from "vue";
  import { useTheme } from '@/composables/useTheme';

 
  export default defineComponent({
    name: "ProjectsSection",
    components: {
  },
    setup() {
      const time = ref<string>("");
  
      const updateClock = () => {
        const now = new Date();
        time.value = now.toLocaleTimeString(); // Formats time as HH:MM:SS AM/PM
      };
  
      onMounted(() => {
        updateClock(); // Set initial time
        const interval = setInterval(updateClock, 1000); // Update every second
  
        onUnmounted(() => {
          clearInterval(interval); // Clear interval on component unmount
        });
      });

      const { theme } = useTheme();
  
  const containerClass = computed(() => {
    return theme.value === 'light' ? 'bg-light' : 'bg-dark';
  });

      return {
        time,
        containerClass,
        currentView: "project", // Default to the 'project' view
      };
    },
  });
  </script>
  
  <style scoped>
.iframe-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust as needed */
  background-color: #f0f0f0; /* Optional */
}
  .clock {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-align: center;
  }
  h1 {
    color: blue;
  }
  .btn{
    border: 1px solid gray;
  }
  .project{
    border: 1px solid #f8f9fa;
  }
  .project:hover {
    background-color: rgb(78, 85, 121) !important ;
    transition: .3s ease-in;
    color: #f8f9fa;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  
