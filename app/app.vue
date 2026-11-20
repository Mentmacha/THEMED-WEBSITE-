<template>
  <!-- PAGE ROOT: full-width wrapper, sets the base font + light/dark background, clips the full-bleed banner/footer overflow -->
  <div class="w-full overflow-x-clip bg-[#ffffff] font-lexend transition-colors duration-500 motion-reduce:transition-none dark:bg-[#111111]">

    <!-- PAGE FRAME: centred column. 1512px design frame on very wide screens, fluid below that -->
    <div class="mx-auto flex min-h-screen w-full  flex-col min-[90rem]:h-1311.25 min-[90rem]:w-378 min-[90rem]:max-w-full">

      <!-- ================= NAV BAR: sticky header (logo, links, search, auth buttons, theme toggle, mobile menu) ================= -->
      <header class="sticky top-0 z-30 bg-white transition-colors duration-500 motion-reduce:transition-none dark:bg-[#151515]">
        <div class="mx-auto flex w-full  items-center justify-between px-4 py-3 min-[75rem]:justify-start min-[75rem]:p-0">

          <!-- Compact logo (below 1200px). Parent sets the size, both images just follow it -->
          <NuxtLink
            to="/"
            aria-label="eCitizen Developer Sandbox"
            class="shrink-0 min-[75rem]:hidden [&>img]:h-9 [&>img]:w-auto [&>img]:object-contain [&>img]:object-left sm:[&>img]:h-10"
          >
            <img :src="`${base}ecitizen-hero-logo.png`" alt="eCitizen Developer Sandbox" class="block dark:hidden" />
            <img :src="`${base}Dark-mode-ecitizen.png`" alt="eCitizen Developer Sandbox" class="hidden dark:block" />
          </NuxtLink>

          <!-- Desktop nav (1200px and up): link list + separate theme toggle -->
          <div class="mt-6.25 mr-[54.95px] ml-20.25 hidden h-11 w-full max-w-[1376.05px] min-w-0 items-center min-[75rem]:flex">

            <!-- Link list: text size / colour are set here and inherited by every link -->
            <ul class="flex h-11 min-w-0 flex-1 items-center text-sm leading-6 text-[#1f1f1f] dark:text-[#f2f2f2]">
              <!-- Home (current page, green) -->
              <li class="shrink-0">
                <NuxtLink to="/" class="flex h-6 w-16.25 items-center font-semibold text-[#34C759] transition-colors dark:text-[#18D75D]">Home</NuxtLink>
              </li>

              <!-- APIs link + click dropdown -->
              <li data-menu class="group relative ml-14.25 flex h-6 w-20 shrink-0 items-center gap-2">
                <NuxtLink
                  to="/apis"
                  class="flex items-center transition-colors group-hover:text-[#5db872] dark:group-hover:text-[#5ed06f]"
                >APIs</NuxtLink>

                <button
                  type="button"
                  aria-label="Toggle APIs menu"
                  :aria-expanded="apiOpen"
                  class="flex size-6 cursor-pointer items-center justify-center transition-colors group-hover:text-[#5db872] dark:group-hover:text-[#5ed06f]"
                  @click="toggleApiMenu"
                >
                  <svg
                    class="size-4.5 transition-transform duration-300"
                    :class="apiOpen && 'rotate-180'"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <!-- Dropdown panel -->
                <div v-show="apiOpen" class="absolute top-full left-0 z-50 pt-2">
                  <ul class="w-44 rounded-xl border border-[#e4e7ec] bg-white py-2 text-[#222222] shadow-lg dark:border-[#333333] dark:bg-[#151515] dark:text-[#fff7f5]">
                    <li>
                      <NuxtLink
                        to="/apis/authorization"
                        class="block px-4 py-2 transition-colors hover:bg-[#e6e6e6] hover:text-[#5db872] dark:hover:bg-[#232323] dark:hover:text-[#5ed06f]"
                      >Authorization API</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        to="/apis/pesaflow"
                        class="block px-4 py-2 transition-colors hover:bg-[#e6e6e6] hover:text-[#5db872] dark:hover:bg-[#232323] dark:hover:text-[#5ed06f]"
                      >Pesaflow integration</NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>

              <!-- Documentation -->
              <li class="ml-12.5 shrink-0">
                <NuxtLink to="/docs" class="flex h-6 w-31.25 items-center whitespace-nowrap transition-colors hover:text-[#5db872] dark:hover:text-[#5ed06f]">Documentation</NuxtLink>
              </li>

              <!-- Help & Support -->
              <li class="ml-14.25 shrink-0">
                <NuxtLink to="/support" class="flex h-6 w-31.25 items-center whitespace-nowrap transition-colors hover:text-[#5db872] dark:hover:text-[#5ed06f]">Help &amp; Support</NuxtLink>
              </li>

              <!-- Search field (shrinks on narrower desktops) -->
              <li class="ml-12.25 h-8.5 w-90.25 min-w-32 shrink">
                <form
                  role="search"
                  class="flex size-full items-center gap-5.5 rounded-full border border-[#d6d6d6] bg-white/70 pl-2 transition-colors focus-within:border-[#5db872] dark:border-[#3b3b3b] dark:bg-[#232323]/60 dark:focus-within:border-[#5ed06f]"
                  @submit.prevent
                >
                  <NuxtLink to="/search" aria-label="Search" class="inline-flex shrink-0 text-[#9a9a9a] dark:text-[#8a8a8a]">
                    <svg class="size-5.75" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35" />
                    </svg>
                  </NuxtLink>
                  <input
                    id="site-search"
                    name="q"
                    type="search"
                    aria-label="Search"
                    class="size-full min-w-0 bg-transparent px-3 outline-none"
                  />
                </form>
              </li>

              <!-- Log in + Register -->
              <li class="ml-auto flex shrink-0 items-center">
                <NuxtLink
                  to="/login"
                  class="ml-27.5 flex h-11 w-19.75 items-center justify-center font-medium whitespace-nowrap transition-colors hover:text-[#5db872] dark:hover:text-[#5ed06f]"
                >Log in</NuxtLink>
                <NuxtLink
                  to="/register"
                  class="mb-1 ml-3 flex h-10 w-22.25 items-center justify-center rounded-full bg-[#15B76C] font-['Inter'] leading-5 font-semibold text-white transition-colors hover:opacity-90 dark:bg-[#18D75D]"
                >Register</NuxtLink>
              </li>
            </ul>

            <!-- Theme toggle (desktop). The button defines how both images behave; they sit in a button so they are not wrapped in a link -->
            <button
              type="button"
              role="switch"
              aria-label="Toggle theme"
              :aria-checked="theme === 'dark'"
              class="relative ml-[73.95px] block h-5 w-9 shrink-0 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4fae72] dark:focus-visible:outline-[#62d67c] [&>img]:pointer-events-none [&>img]:absolute [&>img]:inset-0 [&>img]:size-full [&>img]:object-contain [&>img]:select-none [&>img]:transition-opacity [&>img]:duration-500 [&>img]:ease-in-out motion-reduce:[&>img]:transition-none"
              @click="toggleTheme"
            >
              <img :src="`${base}White-mode-switch.png`" alt="" aria-hidden="true" draggable="false" class="opacity-100 dark:opacity-0" />
              <img :src="`${base}Dark-mode-switch.png`" alt="" aria-hidden="true" draggable="false" class="opacity-0 dark:opacity-100" />
            </button>
          </div>

          <!-- Compact controls (below 1200px): theme toggle + hamburger -->
          <div class="flex shrink-0 items-center gap-3 min-[75rem]:hidden">
            <button
              type="button"
              role="switch"
              aria-label="Toggle theme"
              :aria-checked="theme === 'dark'"
              class="relative block h-5 w-9 shrink-0 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4fae72] dark:focus-visible:outline-[#62d67c] [&>img]:pointer-events-none [&>img]:absolute [&>img]:inset-0 [&>img]:size-full [&>img]:object-contain [&>img]:select-none [&>img]:transition-opacity [&>img]:duration-500 [&>img]:ease-in-out motion-reduce:[&>img]:transition-none"
              @click="toggleTheme"
            >
              <img :src="`${base}White-mode-switch.png`" alt="" aria-hidden="true" draggable="false" class="opacity-100 dark:opacity-0" />
              <img :src="`${base}Dark-mode-switch.png`" alt="" aria-hidden="true" draggable="false" class="opacity-0 dark:opacity-100" />
            </button>

            <button
              type="button"
              class="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#e4e7ec] text-[#1f1f1f] transition-colors hover:bg-[#e6e6e6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4fae72] dark:border-[#333333] dark:text-[#f2f2f2] dark:hover:bg-[#232323] dark:focus-visible:outline-[#62d67c]"
              :aria-expanded="menuOpen"
              aria-label="Menu"
              @click="toggleMobileMenu"
            >
              <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path :class="menuOpen && 'hidden'" d="M4 7h16M4 12h16M4 17h16" />
                <path :class="!menuOpen && 'hidden'" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Compact menu panel (below 1200px): text colour set here, links inherit it -->
        <div
          v-show="menuOpen"
          class="absolute inset-x-0 top-full flex max-h-[calc(100dvh-4rem)] flex-col items-start overflow-y-auto bg-white px-4 pt-2 pb-4 text-base text-[#1a1a1a] shadow-lg dark:bg-[#151515] dark:text-[#f2f2f2] min-[75rem]:hidden"
        >
          <!-- Search -->
          <form
            role="search"
            class="mb-2 flex h-10 w-full items-center gap-3 rounded-full border border-[#d6d6d6] bg-white/70 px-3 transition-colors focus-within:border-[#5db872] dark:border-[#3b3b3b] dark:bg-[#232323]/60 dark:focus-within:border-[#5ed06f]"
            @submit.prevent
          >
            <svg class="size-5 shrink-0 text-[#9a9a9a] dark:text-[#8a8a8a]" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35" />
            </svg>
            <input
              id="site-search-mobile"
              name="q"
              type="search"
              aria-label="Search"
              placeholder="Search"
              class="size-full min-w-0 bg-transparent text-sm outline-none placeholder:text-[#9a9a9a]"
            />
          </form>

          <NuxtLink to="/" class="w-full px-1 py-3 font-semibold text-[#439A63] transition-colors dark:text-[#52C46C]" @click="closeMobileMenu">Home</NuxtLink>
          <NuxtLink to="/apis" class="w-full px-1 py-3 transition-colors hover:text-[#5db872] active:text-[#5db872] dark:hover:text-[#5ed06f] dark:active:text-[#5ed06f]" @click="closeMobileMenu">APIs</NuxtLink>

          <!-- API sub-links (indented). Shared look is set on the wrapper -->
          <div class="flex w-full flex-col text-sm text-[#222222] dark:text-[#fff7f5]">
            <NuxtLink
              to="/apis/authorization"
              class="w-full py-3 pl-5 transition-colors hover:bg-[#e6e6e6] hover:text-[#5db872] active:bg-[#e6e6e6] active:text-[#5db872] dark:hover:bg-[#232323] dark:hover:text-[#5ed06f] dark:active:bg-[#232323] dark:active:text-[#5ed06f]"
              @click="closeMobileMenu"
            >Authorization API</NuxtLink>
            <NuxtLink
              to="/apis/pesaflow"
              class="w-full py-3 pl-5 transition-colors hover:bg-[#e6e6e6] hover:text-[#5db872] active:bg-[#e6e6e6] active:text-[#5db872] dark:hover:bg-[#232323] dark:hover:text-[#5ed06f] dark:active:bg-[#232323] dark:active:text-[#5ed06f]"
              @click="closeMobileMenu"
            >Pesaflow integration</NuxtLink>
          </div>

          <NuxtLink to="/docs" class="w-full px-1 py-3 transition-colors hover:text-[#5db872] active:text-[#5db872] dark:hover:text-[#5ed06f] dark:active:text-[#5ed06f]" @click="closeMobileMenu">Documentation</NuxtLink>
          <NuxtLink to="/support" class="w-full px-1 py-3 transition-colors hover:text-[#5db872] active:text-[#5db872] dark:hover:text-[#5ed06f] dark:active:text-[#5ed06f]" @click="closeMobileMenu">Help &amp; Support</NuxtLink>
          <NuxtLink to="/login" class="w-full px-1 py-3 transition-colors hover:text-[#5db872] active:text-[#5db872] dark:hover:text-[#5ed06f] dark:active:text-[#5ed06f]" @click="closeMobileMenu">Log in</NuxtLink>

          <NuxtLink
            to="/register"
            class="mt-2 inline-flex h-11 w-28 items-center justify-center rounded-full bg-[#15B76C] text-sm font-medium text-white transition-colors hover:opacity-90 dark:bg-[#18D75D]"
            @click="closeMobileMenu"
          >Register</NuxtLink>
        </div>
      </header>

      <main class="flex-1">

        <!-- ================= HERO: intro text on the left, artwork on the right. ================= -->
        <section
          class="mx-auto mt-8 grid w-full max-w-348.25 grid-cols-1 items-start gap-8 px-4 sm:px-8 md:mt-12 min-[75rem]:mt-17.75 min-[75rem]:mb-37.89 min-[75rem]:min-h-[515.4px] min-[75rem]:grid-cols-[minmax(0,1fr)_473px] min-[75rem]:gap-x-8 min-[75rem]:gap-y-0 min-[75rem]:px-8 min-[90rem]:mx-0 min-[90rem]:mt-0 min-[90rem]:ml-19 min-[90rem]:mr-10.75 min-[90rem]:box-content min-[90rem]:h-[515.4px] min-[90rem]:min-h-0 min-[90rem]:w-348.25 min-[90rem]:max-w-[calc(100%-119px)] min-[90rem]:gap-x-33.75 min-[90rem]:px-0 min-[90rem]:pt-17.75 min-[94.5rem]:ml-[calc((100%-94.5rem)/2+4.75rem)] min-[94.5rem]:grid-cols-[785px_473px]"
        >
          <!-- Hero left column: logo, gradient heading, description -->
          <div class="flex min-w-0 flex-col">
            <!-- Hero logo (desktop only). The link has the size, images follow it -->
            <NuxtLink
              to="/"
              class="hidden shrink-0 min-[75rem]:block min-[75rem]:h-24 min-[75rem]:w-74.25 [&>img]:object-contain [&>img]:object-left"
            >
              <img :src="`${base}ecitizen-hero-logo.png`" alt="eCitizen Developer Sandbox" class="block size-full dark:hidden" />
              <img :src="`${base}Dark-mode-ecitizen.png`" alt="eCitizen Developer Sandbox" class="hidden h-10 w-49.5 dark:block" />
            </NuxtLink>

           
<!-- Gradient heading -->
<h1
  class="mt-2 mb-2 bg-[linear-gradient(100deg,rgba(4,85,33,0.7)_0%,#1e9034_25%,#7dcc70_41%,#a9bf36_67%,#db6900_100%)] bg-clip-text text-[34px] leading-[1.3] font-semibold text-transparent sm:text-5xl sm:leading-[1.2] md:text-6xl md:leading-[1.15] min-[75rem]:mt-11.25 min-[75rem]:mb-9 min-[75rem]:h-40 min-[90rem]:text-[70px] min-[90rem]:whitespace-nowrap"
>
  Innovation
  <span class="inline-block bg-[linear-gradient(115deg,#74b86a_0%,#98ca70_30%,#aebf46_55%,#b8a63e_78%,#c4852f_100%)] bg-clip-text text-transparent">Meets</span><br class="hidden min-[75rem]:block" />
  Integration.
</h1>


            <!-- Description: font + colour set once, both paragraphs inherit -->
            <div class="mt-4 max-w-154.5 text-sm leading-[1.45] font-light text-[#1a1a1a] dark:text-[#f2f2f2] min-[75rem]:mt-10 min-[90rem]:mt-9 [&>p+p]:mt-4">
              <p>
                DEV eCitizen, is a controlled and isolated environment designed exclusively for developers,
                learners, and creators. It’s a place where you can dive into coding, explore technologies, and
                experiment with different approaches—all without the fear of affecting your live systems or
                projects.
              </p>
              <p>
                Effortless Testing: No more deploying code with crossed fingers. Test your applications, APIs,
                and integrations rigorously in an environment that mimics real-world conditions.
              </p>
            </div>
          </div>

          <!-- Hero right column: artwork with a dark-mode glow behind it -->
          <div
            class="relative flex w-full max-w-md min-w-0 items-center justify-center justify-self-center min-[75rem]:mt-2.5 min-[75rem]:h-126.36 min-[75rem]:w-118.25 min-[75rem]:max-w-none min-[75rem]:justify-self-end"
          >
            <!-- Glow (dark mode only) -->
            <span
              aria-hidden="true"
              class="pointer-events-none absolute top-1/2 left-1/2 z-0 size-[170%] -translate-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,120,70,0.14)_0%,rgba(34,120,70,0.05)_55%,transparent_100%)] opacity-0 transition-opacity duration-500 ease-in-out motion-reduce:transition-none dark:opacity-100"
            ></span>

            <NuxtLink to="/docs" class="relative z-10 block size-full min-w-0">
              <img :src="`${base}Art-mask-logo.png`" alt="eCitizen hero artwork" class="block h-auto w-full object-contain min-[75rem]:h-full" />
            </NuxtLink>
          </div>
        </section>

        <!-- ================= AUTHORIZATION API: heading, phone + laptop mock-ups, three sign-in option cards ================= -->
        <section
          class="mx-auto mt-16 flex w-full max-w-337.5 flex-col items-center px-4 text-center sm:px-8 md:mt-24 min-[75rem]:mx-26.25 min-[75rem]:mt-50.75 min-[75rem]:px-0 [&>h2]:mt-3 [&>h2]:leading-[1.2] [&>h2]:font-semibold min-[75rem]:[&>h2]:h-11 [&>p]:font-['Inter'] [&>p]:leading-6 [&>p]:font-semibold [&>p]:text-[#18D75D] min-[75rem]:[&>p]:mt-[37.89px]"
        >
          <p>API</p>

          <h2 class="text-2xl sm:text-3xl md:text-4xl min-[75rem]:text-[48px] min-[75rem]:whitespace-nowrap">
            eCitizen Authorization API v2.0.0
          </h2>

          <!-- Quick links pill -->
          <div
            class="mt-8 flex h-7.5 w-fit max-w-full items-center gap-2 rounded-full bg-[#ECFDF3] py-1 pr-1 pl-3 font-['Inter'] text-xs leading-4.5 font-medium whitespace-nowrap text-[#067647] min-[75rem]:mt-16.75 min-[75rem]:mb-7.75 min-[75rem]:ml-74.5 min-[75rem]:mr-65.75 min-[75rem]:w-51.25"
          >
            <NuxtLink to="/try" class="shrink-0">Try it out below</NuxtLink>
            <NuxtLink to="/docs" class="shrink-0 rounded-full bg-white px-1.5 py-0.5">Click through</NuxtLink>
          </div>

          <!-- Mock-ups row: phone (fixed) + laptop (fills the rest). Parent makes every image fill its link -->
          <div class="mx-auto flex w-full max-w-[1022.97px] flex-col items-center gap-6 min-[75rem]:flex-row min-[75rem]:gap-8 [&_img]:block [&_img]:size-full [&_img]:object-contain">
            <!-- Phone -->
            <NuxtLink
              to="/apis/authorization/phone"
              class="block aspect-226/464 w-40 shrink-0 min-[75rem]:aspect-auto min-[75rem]:h-116 min-[75rem]:w-56.5 min-[75rem]:ml-47.97 min-[75rem]:mr-16.16"
            >
              <img
                :src="`${base}Ecitizen-phone.png`"
                alt="eCitizen app on a phone"
                width="226"
                height="464"
                class="min-[75rem]:mr-8 min-[75rem]:origin-center min-[75rem]:translate-x-[-27.4%] min-[75rem]:translate-y-[11%] min-[75rem]:scale-[2.11]"
              />
            </NuxtLink>

            <!-- Laptop -->
            <NuxtLink to="/apis/authorization/laptop" class="block aspect-[764.97/467] w-full min-w-0 min-[75rem]:flex-1">
              <img
                :src="`${base}E-citizen-laptop.png`"
                alt="One Login screen on a laptop"
                width="765"
                height="467"
                class="object-bottom min-[75rem]:ml-8"
              />
            </NuxtLink>
          </div>

          <!-- Option cards. THIS PARENT defines the card size, border, pill shape, icon size and text style; the cards below only add what is different -->
          <div
            class="mx-auto mt-10 mb-10 grid w-full max-w-xl grid-cols-1 gap-4 text-left font-['Inter'] text-base leading-6 text-[#222222] dark:text-[#fff7f5] min-[56.25rem]:max-w-none min-[56.25rem]:grid-cols-3 min-[75rem]:mt-30.25 min-[75rem]:mb-13.75 min-[75rem]:h-53.25 min-[75rem]:max-w-325.5 min-[75rem]:gap-2 min-[75rem]:p-4
                   *:w-full *:border-l-4 *:py-4 *:pr-2 *:pl-5 min-[75rem]:*:h-45.25 min-[75rem]:*:max-w-[412.67px] min-[75rem]:*:pl-6
                   [&>div>a]:mb-4 [&>div>a]:inline-flex [&>div>a]:h-11.25 [&>div>a]:items-center [&>div>a]:gap-2.5 [&>div>a]:rounded-full [&>div>a]:font-['Lexend'] [&>div>a]:font-semibold [&>div>a]:whitespace-nowrap [&>div>a]:transition-colors min-[75rem]:[&>div>a]:mb-8
                   [&>div>p]:w-full min-[75rem]:[&>div>p]:min-h-18 min-[75rem]:[&>div>p]:whitespace-nowrap
                   [&_img]:shrink-0 [&_img]:object-contain"
          >
            <!-- Card 1: Sign in with Password -->
            <div :class="cardBorder(active.auth === 0)">
              <NuxtLink
                to="/apis/authorization/password"
                class="px-4 min-[75rem]:w-61.75 [&>img]:size-7"
                :class="pillStyle(active.auth === 0)"
                @click.capture.prevent="setActive('auth', 0)"
              >
                <img :src="`${base}Icon-a-light.png`" alt="" aria-hidden="true" class="dark:hidden" />
                <img :src="`${base}Icon-a-dark.png`" alt="" aria-hidden="true" class="hidden dark:block" />
                Sign in with Password
              </NuxtLink>
              <p>An all-in-one customer service platform that helps<br class="hidden min-[75rem]:block" /> you balance everything your customers need to be<br class="hidden min-[75rem]:block" /> happy.</p>
            </div>

            <!-- Card 2: Sign in with Digital ID (always green, opens the news page) -->
            <div :class="cardBorder(active.auth === 1)">
              <NuxtLink
                to="/news/sign-in-with-digital-id"
                class="py-1.5 pr-5 pl-1.5 min-[75rem]:w-62.5 [&>img]:size-7.25"
                :class="pillStyleGreen(true)"
              >
                <img :src="`${base}Icon-b-light.png`" alt="" aria-hidden="true" class="dark:hidden" />
                <img :src="`${base}Icon-b-dark.png`" alt="" aria-hidden="true" class="hidden dark:block" />
                Sign in with Digital ID
              </NuxtLink>
              <p>Whether you have a team of 2 or 200, our shared <br class="hidden min-[75rem]:block" /> team inboxes keep everyone on the same page <br class="hidden min-[75rem]:block" />and in the loop.</p>
            </div>

            <!-- Card 3: MCDAs -->
            <div :class="cardBorder(active.auth === 2)">
              <NuxtLink
                to="/apis/authorization/mcdas"
                class="px-4 min-[75rem]:w-31.75 [&>img]:size-7"
                :class="pillStyle(active.auth === 2)"
                @click.capture.prevent="setActive('auth', 2)"
              >
                <img :src="`${base}Icon c light.png`" alt="" aria-hidden="true" class="dark:hidden" />
                <img :src="`${base}Icon-c-dark.png`" alt="" aria-hidden="true" class="hidden dark:block" />
                MCDAs
              </NuxtLink>
              <p>An all-in-one customer service platform that helps<br class="hidden min-[75rem]:block" /> you balance everything your customers need to be<br class="hidden min-[75rem]:block" /> happy.</p>
            </div>
          </div>

          <!-- Learn more button (centred by the section, no margins needed) -->
          <NuxtLink
            to="/apis/authorization"
            class="inline-flex h-12 w-32 items-center justify-center rounded-full bg-[#14b04c] font-['Inter'] text-base leading-6 font-semibold text-white transition-colors hover:bg-[#109a3e]"
          >Learn More</NuxtLink>
        </section>

        <!-- ================= PESAFLOW INTEGRATION: same layout as above with Pesaflow content ================= -->
        <section
          class="mx-auto mt-16 flex w-full max-w-337.5 flex-col items-center px-4 text-center sm:px-8 min-[75rem]:mx-26.25 min-[75rem]:mt-47.75 min-[75rem]:px-0 [&>h2]:mt-3 [&>h2]:leading-[1.2] [&>h2]:font-semibold min-[75rem]:[&>h2]:h-11 [&>p]:font-['Inter'] [&>p]:leading-6 [&>p]:font-semibold [&>p]:text-[#18D75D] min-[75rem]:[&>p]:mt-[37.89px]"
        >
          <p>API</p>

          <h2 class="mb-20 text-2xl sm:text-3xl md:text-[40px]">Pesaflow integration</h2>

          <!-- Mock-ups row: phone (22% wide) + laptop (fills the rest) -->
          <div class="mx-auto flex w-full max-w-[1022.97px] flex-col items-center gap-6 min-[75rem]:flex-row min-[75rem]:gap-8 [&_img]:block [&_img]:size-full [&_img]:object-contain">
            <!-- Phone -->
            <NuxtLink to="/apis/pesaflow/phone" class="block aspect-226/464 w-40 shrink-0 min-[75rem]:w-[22.09%]">
              <img
                :src="`${base}Pesa Flow-phone.png`"
                alt="Pesaflow payment method screen on a phone"
                width="226"
                height="464"
                class="min-[75rem]:mr-8 min-[75rem]:origin-center min-[75rem]:translate-x-[-27.4%] min-[75rem]:translate-y-[11%] min-[75rem]:scale-[2.11]"
              />
            </NuxtLink>

            <!-- Laptop -->
            <NuxtLink to="/apis/pesaflow/laptop" class="block aspect-[764.97/467] w-full min-w-0 min-[75rem]:flex-1">
              <img
                :src="`${base}Pesaflow-laptop.png`"
                alt="Pesaflow payment method screen on a laptop"
                width="765"
                height="467"
                class="object-bottom min-[75rem]:ml-8"
              />
            </NuxtLink>
          </div>

          <!-- Option cards (same parent-driven sizing as the Authorization cards) -->
          <div
            class="mx-auto mt-10 mb-10 grid w-full max-w-xl grid-cols-1 gap-4 text-left font-['Inter'] text-base leading-6 text-[#222222] dark:text-[#fff7f5] min-[56.25rem]:max-w-none min-[56.25rem]:grid-cols-3 min-[75rem]:mt-30.25 min-[75rem]:mb-15 min-[75rem]:h-53.25 min-[75rem]:max-w-325.5 min-[75rem]:gap-2 min-[75rem]:p-4
                   *:w-full *:border-l-4 *:py-4 *:pr-2 *:pl-5 min-[75rem]:*:h-45.25 min-[75rem]:*:max-w-[412.67px] min-[75rem]:*:pl-6
                   [&>div>a]:mb-4 [&>div>a]:inline-flex [&>div>a]:h-11.25 [&>div>a]:items-center [&>div>a]:gap-2.5 [&>div>a]:rounded-full [&>div>a]:font-['Lexend'] [&>div>a]:font-semibold [&>div>a]:whitespace-nowrap [&>div>a]:transition-colors min-[75rem]:[&>div>a]:mb-8
                   [&>div>p]:w-full min-[75rem]:[&>div>p]:min-h-18 min-[75rem]:[&>div>p]:whitespace-nowrap
                   [&_img]:shrink-0 [&_img]:object-contain"
          >
            <!-- Card 1: Make payment -->
            <div :class="cardBorder(active.pesa === 0)">
              <NuxtLink
                to="/apis/pesaflow/make-payment"
                class="px-4 min-[75rem]:w-47.75 [&>img]:size-7"
                :class="pillStyle(active.pesa === 0)"
                @click.capture.prevent="setActive('pesa', 0)"
              >
                <img :src="`${base}Icon-a-light.png`" alt="" aria-hidden="true" class="dark:hidden" />
                <img :src="`${base}Icon-a-dark.png`" alt="" aria-hidden="true" class="hidden dark:block" />
                Make payment
              </NuxtLink>
              <p>An all-in-one customer service platform that helps<br class="hidden min-[75rem]:block" /> you balance everything your customers need to be<br class="hidden min-[75rem]:block" /> happy.</p>
            </div>

            <!-- Card 2: Checkout -->
            <div :class="cardBorder(active.pesa === 1)">
              <NuxtLink
                to="/apis/pesaflow/checkout"
                class="py-1.5 pr-5 pl-1.5 min-[75rem]:w-35.25 [&>img]:size-7.25"
                :class="pillStyleGreen(active.pesa === 1)"
                @click.capture.prevent="setActive('pesa', 1)"
              >
                <img :src="`${base}Icon-b-light.png`" alt="" aria-hidden="true" class="dark:hidden" />
                <img :src="`${base}Icon-b-dark.png`" alt="" aria-hidden="true" class="hidden dark:block" />
                Checkout
              </NuxtLink>
              <p>Whether you have a team of 2 or 200, our shared<br class="hidden min-[75rem]:block" /> team inboxes keep everyone on the same page<br class="hidden min-[75rem]:block" /> and in the loop.</p>
            </div>

            <!-- Card 3: Configure channels -->
            <div :class="cardBorder(active.pesa === 2)">
              <NuxtLink
                to="/apis/pesaflow/configure-channels"
                class="px-4 min-[75rem]:w-56.5 [&>img]:size-7"
                :class="pillStyle(active.pesa === 2)"
                @click.capture.prevent="setActive('pesa', 2)"
              >
                <img :src="`${base}Icon c light.png`" alt="" aria-hidden="true" class="dark:hidden" />
                <img :src="`${base}Icon-c-dark.png`" alt="" aria-hidden="true" class="hidden dark:block" />
                Configure channels
              </NuxtLink>
              <p>An all-in-one customer service platform that helps<br class="hidden min-[75rem]:block" /> you balance everything your customers need to be<br class="hidden min-[75rem]:block" /> happy.</p>
            </div>
          </div>

          <!-- Learn more button -->
          <NuxtLink
            to="/apis/pesaflow"
            class="mb-16 inline-flex h-12 w-32 items-center justify-center rounded-full bg-[#14b04c] font-['Inter'] text-base leading-6 font-semibold text-white transition-colors hover:bg-[#109a3e] min-[75rem]:mb-32.5 min-[75rem]:ml-179 min-[75rem]:mr-167"
          >Learn More</NuxtLink>
        </section>

        <!-- ================= INSTANT ENVIRONMENTS BANNER: full-screen-width greyscale photo with centred heading ================= -->
        <section class="relative left-1/2 mb-12 h-72 w-screen -translate-x-1/2 sm:h-96 md:h-130 min-[75rem]:mb-24.7 min-[75rem]:h-198.25">
          <NuxtLink to="/environments" class="relative block size-full">
            <img :src="`${base}Rectangle-9.png`" alt="Developer working at a desk" class="size-full object-cover grayscale" />

            <!-- Text layer: stretches over the photo, stays centred inside the 1512 frame -->
            <div class="absolute inset-y-0 left-1/2 flex w-full  -translate-x-1/2 flex-col items-center justify-center px-4 text-center text-white">
              <h2 class="mb-4 text-3xl leading-[1.2] font-semibold sm:text-5xl md:text-7xl min-[75rem]:mb-4.75 min-[75rem]:h-70.5 min-[75rem]:max-w-214.75 min-[75rem]:whitespace-nowrap min-[86.25rem]:text-[96px]">
                Instant developer <br class="hidden min-[75rem]:block" />
                environments
              </h2>

              <span class="px-7 py-4 font-['Inter'] text-lg leading-7 font-semibold whitespace-nowrap transition-colors hover:text-[#18D75D] min-[75rem]:mb-35.25 min-[75rem]:h-15 min-[75rem]:w-38.75">
                Learn More
              </span>
            </div>
          </NuxtLink>
        </section>

        <!-- ================= LATEST NEWS: heading + three article cards. Parent styles every card part (image, date, title, text) ================= -->
        <section
          class="mx-auto mb-12 w-full max-w-338.25 px-4 text-center font-['Inter'] text-[#222222] dark:text-[#fff7f5] sm:px-8 min-[75rem]:mb-6.75 min-[75rem]:ml-19.75 min-[75rem]:px-0 [&>h2]:mx-auto [&>h2]:max-w-3xl [&>p]:mx-auto [&>p]:max-w-3xl"
        >
          <h2 class="mb-5 h-11 text-2xl leading-11 font-semibold sm:text-3xl md:text-[36px] min-[75rem]:mt-24">Latest News</h2>
          <p class="mt-2 mb-10 text-base leading-7.5 md:mb-16 md:text-lg lg:text-xl">Interviews, tips, guides, industry best practices, and news.</p>

          <!-- Cards grid: column widths come from the grid, cards just fill them -->
          <div
            class="mx-auto mt-10 mb-10 grid w-full grid-cols-1 gap-10 text-left text-base leading-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 min-[75rem]:mt-16 min-[75rem]:mb-16 min-[75rem]:h-97
                   [&_article>a]:block [&_article>a]:overflow-hidden [&_article>a]:rounded-lg
                   [&_img]:mb-8 [&_img]:h-60 [&_img]:w-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-300 [&_img]:hover:scale-105
                   [&_time]:mt-5 [&_time]:mb-2 [&_time]:block [&_time]:h-5 [&_time]:text-sm [&_time]:leading-5 [&_time]:font-semibold [&_time]:text-[#14B04C]
                   [&_h3>a]:mb-2 [&_h3>a]:flex [&_h3>a]:min-h-8 [&_h3>a]:items-start [&_h3>a]:justify-between [&_h3>a]:gap-2 [&_h3>a]:text-2xl [&_h3>a]:leading-8 [&_h3>a]:font-semibold [&_h3>a]:hover:text-[#14b04c]
                   [&_svg]:size-6 [&_svg]:shrink-0
                   [&_article>p]:min-h-12"
          >
            <!-- News 1 -->
            <article>
              <NuxtLink to="/news/sign-in-with-digital-id">
                <img :src="`${base}Sign-in-with-digital.png`" alt="Sign in with Digital ID" />
              </NuxtLink>
              <time>16 Jan 2022</time>
              <h3>
                <NuxtLink to="/news/sign-in-with-digital-id">
                  Sign in with Digital ID
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M8 7h9v9" /></svg>
                </NuxtLink>
              </h3>
              <p>Mental models are simple expressions of complex<br class="hidden min-[75rem]:block" /> processes or relationships.</p>
            </article>

            <!-- News 2 -->
            <article>
              <NuxtLink to="/news/what-is-wireframing">
                <img :src="`${base}Reframing.png`" alt="What is Wireframing?" />
              </NuxtLink>
              <time>15 Jan 2022</time>
              <h3>
                <NuxtLink to="/news/what-is-wireframing">
                  What is Wireframing?
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M8 7h9v9" /></svg>
                </NuxtLink>
              </h3>
              <p>Introduction to Wireframing and its Principles. Learn<br class="hidden min-[75rem]:block" /> from the best in the industry.</p>
            </article>

            <!-- News 3 (centred on its own row at the 2-column breakpoint) -->
            <article class="sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:mx-0 lg:w-auto">
              <NuxtLink to="/news/payment-checkout">
                <img :src="`${base}Payment-checkout.png`" alt="Payment Checkout" />
              </NuxtLink>
              <time>14 Jan 2022</time>
              <h3>
                <NuxtLink to="/news/payment-checkout">
                  Payment Checkout
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M8 7h9v9" /></svg>
                </NuxtLink>
              </h3>
              <p>Collaboration can make our teams stronger, and our<br class="hidden min-[75rem]:block" /> individual designs better.</p>
            </article>
          </div>

          <!-- View all news -->
          <NuxtLink
            to="/news"
            class="inline-flex h-12 items-center justify-center rounded-full bg-[#14b04c] px-8 text-base leading-6 font-semibold text-white transition-colors hover:bg-[#109a3e] min-[75rem]:mb-6.75"
          >View All</NuxtLink>
        </section>
      </main>

      <!-- ================= FOOTER: full-screen-width dark bar. Font + base colours set here and inherited ================= -->
      <footer class="relative left-1/2 w-screen -translate-x-1/2 bg-[#090909] font-['Inter'] text-base leading-6 text-white">
        <div class="mx-auto w-full px-4 pt-12 pb-8 sm:px-8 min-[75rem]:h-86 min-[75rem]:w-378 min-[75rem]:px-29 min-[75rem]:pt-16 min-[75rem]:pb-39">

          <!-- Footer top: brand block on the left, links on the right -->
          <div class="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <NuxtLink to="/" class="inline-block">
                <img :src="`${base}Footer-frame.png`" alt="eCitizen" class="h-11 w-55.25 max-w-full object-contain object-left" />
              </NuxtLink>
              <p class="mt-8 text-gray-200">Giving Kenyans easy access to automated<br class="hidden min-[75rem]:block" /> services.</p>
            </div>

            <!-- Footer links: hover + transition set once on the nav -->
            <nav
              aria-label="Footer"
              class="mb-4 flex w-full flex-wrap items-center gap-x-8 gap-y-3 font-semibold md:mt-10 md:mb-12.5 md:w-auto min-[75rem]:h-6 min-[75rem]:w-78 [&>a]:transition-colors [&>a]:hover:text-[#14b04c]"
            >
              <NuxtLink to="/support">Help</NuxtLink>
              <NuxtLink to="/privacy">Privacy</NuxtLink>
              <NuxtLink to="/terms">Terms &amp; Conditions</NuxtLink>
            </nav>
          </div>

          <!-- Footer bottom: copyright + social icons (parent sizes every icon) -->
          <div class="mt-6 flex w-full flex-col gap-5 border-t border-white/15 pt-6 text-gray-200 sm:flex-row sm:items-center sm:justify-between min-[75rem]:mt-16 min-[75rem]:mb-9 min-[75rem]:h-14 min-[75rem]:pt-0">
            <!-- Year updates automatically -->
            <p>©️ {{ currentYear }} eCitizen. All rights reserved.</p>

            <div class="flex h-6 w-30 items-center gap-6 [&>a]:block [&>a]:transition-opacity [&>a]:hover:opacity-70 [&_img]:size-6 [&_img]:object-contain">
              <NuxtLink to="https://twitter.com/" external target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img :src="`${base}App-x-icon.png`" alt="" aria-hidden="true" />
              </NuxtLink>
              <NuxtLink to="https://www.linkedin.com/" external target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img :src="`${base}LinkedIn-icon.png`" alt="" aria-hidden="true" />
              </NuxtLink>
              <NuxtLink to="https://www.facebook.com/" external target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img :src="`${base}Facebook-icon.png`" alt="" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
/* =====================================================================
   SCRIPT = BEHAVIOUR + SHARED STYLE TOKENS
   (ref, reactive, onMounted... are auto-imported by Nuxt)
     0. Base URL     - prefix for every image path written in the template
     1. Theme        - adds / removes the "dark" class on <html>
     2. Nav bar      - APIs dropdown + mobile menu
     3. Option cards - active tab + the shared active/inactive styles
     4. Footer year

   REQUIRED (already set up):
     - main.css:        @custom-variant dark (&:where(.dark, .dark *));
     - nuxt.config.ts:  app.head.script with the pre-paint theme snippet
   ===================================================================== */

/* ---------- 0. BASE URL ----------
   Template usage: :src="`${base}File-name.png`"  (use the exact file name from /public).
   Works with app.baseURL = '/THEMED-WEBSITE-/' on GitHub Pages and in dev. */
const base = useRuntimeConfig().app.baseURL

/* ---------- 1. THEME ---------- */
const THEME_KEY = 'ec-theme'
const theme = ref('light') // mirrors the <html> class, used for aria-checked

function applyTheme(value) {
  const root = document.documentElement
  root.classList.toggle('dark', value === 'dark')
  root.style.colorScheme = value
  theme.value = value
}

function toggleTheme() {
  const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
  applyTheme(next)
  try { localStorage.setItem(THEME_KEY, next) } catch (e) { /* storage blocked */ }
}

function getInitialTheme() {
  let saved = null
  try { saved = localStorage.getItem(THEME_KEY) } catch (e) { /* storage blocked */ }
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/* ---------- 2. NAV BAR ---------- */
const apiOpen = ref(false)
const menuOpen = ref(false)

const toggleApiMenu = () => { apiOpen.value = !apiOpen.value }
const toggleMobileMenu = () => { menuOpen.value = !menuOpen.value }
const closeMobileMenu = () => { menuOpen.value = false }

// Click anywhere outside the APIs dropdown closes it
function onDocClick(e) {
  if (!e.target.closest('[data-menu]')) apiOpen.value = false
}

// Escape closes both the dropdown and the mobile menu
function onKey(e) {
  if (e.key === 'Escape') {
    apiOpen.value = false
    menuOpen.value = false
  }
}

// Resizing up to the desktop layout closes the mobile menu
function onResize() {
  if (window.innerWidth >= 1200) menuOpen.value = false
}

/* ---------- 3. OPTION CARDS ---------- */
// Which card is selected in each group: 'auth' (Authorization API) | 'pesa' (Pesaflow)
const active = reactive({ auth: 1, pesa: 1 })
const setActive = (group, index) => { active[group] = index }

// Shared styles: written once here instead of repeating the long strings in every card
const cardBorder = (on) =>
  on ? 'border-[#14B04C] dark:border-[#18D75D]' : 'border-[#F2F4F7]'

const pillOff =
  'bg-[#e6e6e6] text-[#222222] hover:bg-[#d9d9d9] dark:bg-[#222222] dark:text-[#c5c5c5] dark:hover:bg-[#232323]'

// Dark-green pill (Password, MCDAs, Make payment, Configure channels)
const pillStyle = (on) => (on ? 'bg-[#0a993d] text-white' : pillOff)

// Bright-green pill (Digital ID, Checkout)
const pillStyleGreen = (on) =>
  on
    ? 'bg-[#14B04C] text-white hover:bg-[#109a3e] dark:bg-[#07FF6F]/36 dark:text-white dark:hover:bg-[#07FF6F]/50'
    : pillOff

/* ---------- 4. FOOTER YEAR ---------- */
const currentYear = new Date().getFullYear()

/* ---------- LIFECYCLE ---------- */
onMounted(() => {
  applyTheme(getInitialTheme())
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', onResize)
})
</script>