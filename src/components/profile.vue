<template>
    <section id="profile">
        <div :class="[containerClass,'container','rounded-3']">            
            <div class="form-group my-2" >
            <div class="logo fw-bold py-1 d-flex justify-content-between">
                <p class="m-0" style="font-size: 19px;">
                <i class="fa fa-person" style="padding-right: 3px;"></i> Azurin, Jaymark Calma
                </p>
                <div class="toggle d-flex justify-content-end gap-2">
                <button
                    class="px-2 py-1 d-none d-xl-block bg-primary rounded-3"
                    style="font-size: 14px; font-weight: 600; border: none;"
                    type="button" 
                    data-bs-toggle="modal"
                    data-bs-target="#confirmationModal">
                    View resume
                </button>
                <modal />
                <ThemeToggle />
                </div>
            </div>
            </div>
        </div>

        <div :class="[containerClass,'container-fluid','pt-2','rounded-4',]">
            <div class="image bg-light rounded-4" style="border-bottom: 4px solid blue; background-image: url(/img/pic2.jpg); background-size: cover; background-position: center; width: 100%; height: 230px;" ></div>
            <div class="pic d-flex justify-content-center" style="position: relative; bottom: 140px;">
                <img class="shadow-lg" style=" border-radius: 50%; border: 5px solid blue;" src="/public/img/img1.jpg" alt="">
            </div>
            <div class="caption" style="font-size: small; position: relative; bottom: 120px;">
                <p class="px-2 m-0 text-center d-none d-lg-block">I’m a 21-year-old front-end developer from the Philippines,  <span class="text-primary fw-bold">aspiring to become a full-stack developer. </span> Over the past few years, I’ve been dedicated to crafting visually engaging and user-friendly websites. I’m passionate about blending creativity and technology to deliver impactful digital experiences and continuously strive to expand my skills in web development.</p>
                <p class="px-1 m-0 text-center d-lg-none d-lg-block">I’m a 21-year-old front-end developer from the Philippines,  <span class="text-primary fw-bold">aspiring to become a full-stack developer. </span> Over the past few years, I’ve been dedicated to crafting visually engaging and user-friendly websites.</p>
            </div>
        </div>

        <div class="container marquee">
            <marquee behavior="" direction="" class="py-2 bg-light rounded-3" style="position: relative; bottom: 90px;">
                <div class="d-flex justify-content-center gap-3" style="font-weight: 600;">
                    <div class="d-flex justify-content-center gap-2 py-1 bg-primary" style="width: 35%; border-radius: 5px;">
                        <p class="m-0 pt-0 px-2 bg-primary-subtle" style="font-size: 16px;"><i class="fab fa-html5" style="color: #000; padding-right: 5px;"></i>Html</p>
                    </div>
                    <div class="d-flex justify-content-center gap-2 py-1 bg-primary" style="width: 35%; border-radius: 5px;">
                        <p class="m-0 pt-0 px-2 bg-primary-subtle" style="font-size: 16px;"><i class="fab fa-css3" style="color: #000; padding-right: 5px;"></i>Css</p>
                    </div>
                    <div class="d-flex justify-content-center gap-2 py-1 bg-primary" style="width: 40%; border-radius: 5px;">
                        <p class="m-0 pt-0 px-2 bg-primary-subtle" style="font-size: 16px;"><i class="fab fa-bootstrap" style="color: #000; padding-right: 5px;"></i>Bootstrap</p>
                    </div>
                    <div class="d-flex justify-content-center gap-2 py-1 bg-primary" style="width: 40%; border-radius: 5px;">
                        <p class="m-0 pt-0 px-2 bg-primary-subtle" style="font-size: 16px;"><i class="fab fa-js" style="color: #000; padding-right: 5px;"></i>JavaScript</p>
                    </div>
                    <div class="d-flex justify-content-center gap-2 py-1 bg-primary" style="width: 35%; border-radius: 5px;">
                        <p class="m-0 pt-0 px-2  bg-primary-subtle" style="font-size: 16px;"><i class="fab fa-php" style="color: #000; padding-right: 5px;"></i>Php</p>
                    </div>
                    <div class="d-flex justify-content-center gap-2 py-1 bg-primary" style="width: 35%; border-radius: 5px;">
                        <p class="m-0 pt-0 px-2 bg-primary-subtle" style="font-size: 16px;"><i class="fab fa-laravel" style="color: #000; padding-right: 5px;"></i>Laravel</p>
                    </div>
                    <div class="d-flex justify-content-center gap-2 py-1 bg-primary" style="width: 35%; border-radius: 5px;">
                        <p class="m-0 pt-0 px-2 bg-primary-subtle" style="font-size: 16px;"><i class="fab fa-react" style="color: #000; padding-right: 5px;"></i>React</p>
                    </div>
                    <div class="d-flex justify-content-center gap-2 py-1 bg-primary" style="width: 40%; border-radius: 5px;">
                        <p class="m-0 pt-0 px-2 bg-primary-subtle" style="font-size: 16px;"><i class="fab fa-tscript" style="color: #000; padding-right: 5px;"></i>TypeScript</p>
                    </div>
                    <div class="d-flex justify-content-center gap-2 py-1 bg-primary" style="width: 40%; border-radius: 5px;">
                        <p class="m-0 pt-0 px-2 bg-primary-subtle" style="font-size: 16px;"><i class="fab fa-tailwind" style="color: #000; padding-right: 5px;"></i>Tailwind</p>
                    </div>
                    <div class="d-flex justify-content-center gap-2 py-1 bg-primary" style="width: 35%; border-radius: 5px;">
                        <p class="m-0 pt-0 px-2 bg-primary-subtle" style="font-size: 16px;"><i class="fab fa-vue" style="color: #000; padding-right: 5px;"></i>Vue.js</p>
                    </div>
                    <div class="d-flex justify-content-center gap-2 py-1 bg-primary" style="width: 35%; border-radius: 5px;">
                        <p class="m-0 pt-0 px-2 bg-primary-subtle" style="font-size: 16px;"><i class="fab fa-vite" style="color: #000; padding-right: 5px;"></i>Vite</p>
                    </div>
                </div>
            </marquee>
        </div>

        <div :class="[containerClass, 'container-fluid','py-3']" style="border-radius: 15px; position: relative; bottom: 42px;">
            <h4 class="fw-bold p-3 fs-4 rounded-3 text-primary" style="border: 1px solid gray;">Academic Qualifications</h4>
            <div class="caption p-3 rounded-3" style="font-size: 14px; line-height: 1.6; border: 1px solid gray;">
                <p class="m-0">Graduate of <span class="text-primary fw-bold">Bachelor of Science in Information Technology (BSIT) </span> with a focus on web development, specializing in front-end development and aspiring to become a 
                    <span class="text-primary fw-bold">full-stack developer.</span> 
                    My expertise includes creating visually engaging and user-friendly websites, with a strong understanding of networking and foundational skills in network administration.
                    I also hold a TESDA National Certificate II (NC II) in Computer Systems Servicing (CSS), which validates my competencies in computer hardware servicing, basic networking, and system maintenance.
                </p>
            </div>
        </div>


        <div :class="[containerClass, 'container-fluid', 'py-3']" style="border-radius: 15px; position: relative; bottom: 29px;">
            <div class="d-flex justify-content-between" style="font-size: 14px; line-height: 1.6;">
                <button 
                    :class="['px-2', 'rounded-3', 'bg-primary', 'text-dark', 'fw-bold']" 
                    style="border-color: lightskyblue;" 
                    type="button" 
                    @click="copyToClipboard('azurin.jaymark.tshs@gmail.com')"
                >
                    <p class="d-none d-xl-block p-0 m-0 text-light">
                        azurin.jaymark.tshs@gmail.com <i class="fa fa-copy"></i>
                    </p>
                    <p class="d-xl-none d-lg-block p-0 m-0 text-light">
                        My email <i class="fa fa-copy"></i>
                    </p>
                </button>
                <button 
                    :class="['px-2', 'rounded-3', 'bg-primary', 'text-dark', 'fw-bold']" 
                    style="border-color: lightskyblue;" 
                    type="button" 
                    data-bs-toggle="modal"
                    data-bs-target="#reachme">
                    <p class="d-none d-xl-block p-0 m-0 text-light">
                        Connect with me <i class="fa fa-link"></i>
                    </p>
                    <p class="d-xl-none d-lg-block p-0 m-0 text-light">
                        Reach me here <i class="fa fa-link"></i>
                    </p>
                </button>
            </div>
        </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed} from 'vue';
  import { useTheme } from '@/composables/useTheme';
  import ThemeToggle from "@/components/ThemeToggle.vue";
  import modal from "@/components/modal.vue";

  
  export default defineComponent({
    name: "profile",
    components: {
    ThemeToggle,
    modal,
  },
    setup() {
      const { theme } = useTheme();
  
      const containerClass = computed(() => {
        return theme.value === 'light' ? 'bg-light' : 'bg-dark';
      });
  
      return {
        containerClass,
      };
    },
    methods: {
        copyToClipboard(email) {
            navigator.clipboard.writeText(email).then(() => {
                alert('Email copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
    }

  });
  </script>
  
  <style scoped>
  h1 {
        color: blue;
    }
    button {
        cursor: pointer;
    }

    button.active {
        color: #ffffff;
    }
    .container-fluid{
        border: 1px solid #f8f9fa;
    }
    .container marquee{
        border-top: 1px  solid gray;
        border-bottom: 1px  solid gray;
    }
  </style>
  
