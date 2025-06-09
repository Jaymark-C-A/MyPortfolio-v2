  <template>
    <!-- Confirmation modal -->
    <div
        class="modal fade"
        id="confirmationModal"
        tabindex="-1"
        aria-labelledby="confirmationModalLabel"
        aria-hidden="true"
        >
        <div class="modal-dialog">
        <div class="modal-content bg-primary-subtle">
            <div class="modal-header">
            <h5 class="modal-title fs-6 text-primary-emphasis fw-bold" style="letter-spacing: 1px;" id="confirmationModalLabel">Resume_Azurin-Jaymark.pdf</h5>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
            </div>
            <div class="modal-body bg-dark text-light-emphasis text-center fs-5">
            <div class="d-flex justify-content-center">
                <img class="shadow-lg" style="border: 1px solid rgb(143, 201, 167);" src="/public/img/Resume.png" alt="Resume" width="50%" height="auto">
            </div>
            </div>
            <div class="modal-footer">
            <button
                type="button"
                class="btn fw-bold"
                style="font-size: 14px; color: #071e33;"
                data-bs-dismiss="modal"
            >
                Close
            </button>
            <button
                type="button"
                class="btn w-25 btn-primary"
                style="font-size: 14px;"
                @click="downloadResume"
                data-bs-dismiss="modal"
            >
                Download
            </button>
            </div>
        </div>
        </div>
    </div>



        <!-- Confirmation modal -->
        <div
        class="modal fade"
        id="reachme"
        tabindex="-1"
        aria-labelledby="confirmationModalLabel"
        aria-hidden="true"
        >
        <div class="modal-dialog">
        <div class="modal-content bg">
            <div class="modal-header">
            <h5 class="modal-title fs-6 fw-bold" style="letter-spacing: 1px;" id="confirmationModalLabel">
                Connect with me <i class="fa fa-link"></i>
            </h5>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
            </div>
            <div class="modal-body text-center fs-5" style="background: rgb(19, 19, 97);">
                <div class="container">
                    <h2 class="text-center mb-4">Social Links</h2>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="list-group fs-6 bg-dark">
                                <a href="https://www.facebook.com/profile.php?id=61571340871443" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-facebook fa-lg text-primary me-3"></i> Facebook
                                </a>
                                <a href="https://twitter.com" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-twitter fa-lg text-info me-3"></i> Twitter
                                </a>
                                <a href="www.linkedin.com/in/jaymark-azurin-0a468729a" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-linkedin fa-lg text-primary me-3"></i> LinkedIn
                                </a>
                                <a href="https://www.instagram.com/jay_azrin/" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-instagram fa-lg text-danger me-3"></i> Instagram
                                </a>
                                <a href="https://github.com/Jaymark-C-A" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-github fa-lg text-dark me-3"></i> GitHub
                                </a>
                                <a href="https://youtube.com" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-youtube fa-lg text-danger me-3"></i> YouTube
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="list-group fs-6">
                                <a href="https://github.com" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-github fa-lg text-dark me-3"></i> GitHub
                                </a>
                                <a href="https://stackoverflow.com" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-stack-overflow fa-lg text-orange me-3"></i> Stack Overflow
                                </a>
                                <a href="https://linkedin.com" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-linkedin fa-lg text-primary me-3"></i> LinkedIn
                                </a>
                                <a href="https://dev.to" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-dev fa-lg text-gray me-3"></i> DEV.to
                                </a>
                                <a href="https://gitlab.com" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-gitlab fa-lg text-orange me-3"></i> GitLab
                                </a>
                                <a href="https://hashnode.com" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <i class="fab fa-hashtag fa-lg text-blue me-3"></i> Hashnode
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer bg"></div>
        </div>
        </div>
    </div>

  </template>
  
  <script lang="ts">
  export default {
    name: "modal",
    methods: {
        // Method to handle the resume download
        downloadResume() {
        // Replace this URL with the actual path to the resume file
       const resumeUrl = 'pdf/Resume_Azurin-Jaymark.pdf';

        // Create an anchor tag to trigger the download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Web-Resume_Azurin-Jaymark.pdf'; // Optionally change the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        }
    },

  };
  </script>
  
  <style>
  .list-group-item, .bg{
    background-color: rgb(78, 85, 121);
    color: #f8f9fa;
  }
  
  </style>
  
