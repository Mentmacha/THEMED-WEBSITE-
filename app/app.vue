<template>
  <div class="mx-auto flex min-h-screen w-full max-w-378 flex-col overflow-x-clip bg-(--ec-bg) font-['Lexend',sans-serif] text-(--ec-text) min-[90rem]:h-1311.25 min-[90rem]:w-378 min-[90rem]:max-w-full">
    <!-- ================= NAV BAR ================= -->
    <header class="relative z-30">
      <div class="mx-auto flex w-full max-w-378 items-center justify-between px-4 py-3 min-[75rem]:justify-start min-[75rem]:p-0">
        <!-- COMPACT ONLY: logo -->
        <a href="/" class="shrink-0 min-[75rem]:hidden" aria-label="eCitizen Developer Sandbox">
          <Transition
            mode="out-in"
            enter-active-class="transition-opacity duration-250 ease-in-out motion-reduce:transition-none"
            leave-active-class="transition-opacity duration-250 ease-in-out motion-reduce:transition-none"
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
          >
            <img
              v-if="theme !== 'dark'"
              key="light"
              src="/ecitizen%20hero%20logo%20.png"
              alt="eCitizen Developer Sandbox"
              class="h-9 w-auto object-contain object-left sm:h-10"
            />
            <img
              v-else
              key="dark"
              src="/Dark%20mode%20ecitizen.png"
              alt="eCitizen Developer Sandbox"
              class="h-9 w-auto object-contain object-left sm:h-10"
            />
          </Transition>
        </a>

        <!-- DESKTOP (1200px and up): NAV SECTION + SEPARATE TOGGLE -->
        <div class="mt-6.25 mr-[54.95px] ml-20.25 hidden h-11 w-full max-w-[1376.05px] min-w-0 items-center min-[75rem]:flex">
          <!-- NAV SECTION -->
          <ul class="flex h-11 min-w-0 flex-1 items-center text-sm text-(--ec-nav-text)">
            <!-- HOME -->
            <li class="shrink-0">
              <a
                href="/"
                class="flex h-6 w-16.25 items-center leading-6 font-semibold text-(--ec-nav-home) transition-colors hover:text-(--ec-green-strong)"
              >Home</a>
            </li>

            <!-- APIs WITH CLICK DROPDOWN -->
            <li data-menu class="group relative ml-14.25 flex h-6 w-20 shrink-0 items-center gap-2">
              <a
                href="/apis"
                class="flex items-center leading-6 transition-colors group-hover:text-(--ec-nav-active)"
              >APIs</a>

              <button
                type="button"
                aria-label="Toggle APIs menu"
                :aria-expanded="apiOpen"
                class="flex size-6 cursor-pointer items-center justify-center transition-colors group-hover:text-(--ec-nav-active)"
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

              <div v-show="apiOpen" class="absolute top-full left-0 z-50 pt-2">
                <ul class="w-44 rounded-xl border border-(--ec-border) bg-(--ec-bg) py-2 shadow-lg">
                  <li>
                    <a
                      href="/apis/authorization"
                      class="block px-4 py-2 text-sm text-(--ec-muted) transition-colors hover:bg-(--ec-surface) hover:text-(--ec-nav-active)"
                    >Authorization API</a>
                  </li>
                  <li>
                    <a
                      href="/apis/pesaflow"
                      class="block px-4 py-2 text-sm text-(--ec-muted) transition-colors hover:bg-(--ec-surface) hover:text-(--ec-nav-active)"
                    >Pesaflow integration</a>
                  </li>
                </ul>
              </div>
            </li>

            <!-- DOCUMENTATION -->
            <li class="ml-12.5 shrink-0">
              <a
                href="/docs"
                class="flex h-6 w-31.25 items-center leading-6 whitespace-nowrap transition-colors hover:text-(--ec-nav-active)"
              >Documentation</a>
            </li>

            <!-- HELP & SUPPORT -->
            <li class="ml-14.25 shrink-0">
              <a
                href="/support"
                class="flex h-6 w-31.25 items-center leading-6 whitespace-nowrap transition-colors hover:text-(--ec-nav-active)"
              >Help &amp; Support</a>
            </li>

            <!-- SEARCH FIELD (shrinks on narrower desktops) -->
            <li class="ml-12.25 h-8.5 w-90.25 min-w-32 shrink">
              <form
                role="search"
                class="flex h-8.5 w-full items-center gap-5.5 rounded-full border border-(--ec-search-border) bg-(--ec-search-bg) pl-2 transition-colors focus-within:border-(--ec-nav-active)"
                @submit.prevent
              >
                <a href="/search" aria-label="Search" class="inline-flex shrink-0 text-(--ec-search-icon)">
                  <svg class="size-5.75" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35" />
                  </svg>
                </a>
                <input
                  id="site-search"
                  name="q"
                  type="search"
                  aria-label="Search"
                  class="size-full min-w-0 bg-transparent px-3 text-sm text-(--ec-nav-text) outline-none"
                />
              </form>
            </li>

            <!-- LOG IN + REGISTER -->
            <li class="ml-auto flex shrink-0 items-center">
              <a
                href="/login"
                class="ml-27.5 flex h-11 w-19.75 items-center justify-center text-sm leading-6 font-medium whitespace-nowrap transition-colors hover:text-(--ec-nav-active)"
              >Log in</a>
              <a
                href="/register"
                class="mb-1 ml-3 flex h-10 w-22.25 items-center justify-center rounded-full bg-(--ec-nav-reg) font-['Inter'] text-sm font-semibold leading-5 text-white transition-colors hover:opacity-90"
              >
                Register
              </a>
            </li>
          </ul>

          <!-- THEME TOGGLE (desktop) - separate section -->
          <button
            type="button"
            role="switch"
            aria-label="Toggle theme"
            :aria-checked="theme === 'dark'"
            class="relative ml-[73.95px] block h-5 w-9 shrink-0 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ec-green)"
            @click="toggleTheme"
          >
            <img
              src="/White%20mode%20switch.png"
              alt=""
              aria-hidden="true"
              draggable="false"
              class="absolute inset-0 size-full object-contain transition-opacity duration-500 ease-in-out select-none motion-reduce:transition-none"
              :class="theme === 'dark' ? 'opacity-0' : 'opacity-100'"
            />
            <img
              src="/Dark%20mode%20switch.png"
              alt=""
              aria-hidden="true"
              draggable="false"
              class="absolute inset-0 size-full object-contain transition-opacity duration-500 ease-in-out select-none motion-reduce:transition-none"
              :class="theme === 'dark' ? 'opacity-100' : 'opacity-0'"
            />
          </button>
        </div>

        <!-- COMPACT ONLY: theme toggle + hamburger -->
        <div class="flex shrink-0 items-center gap-3 min-[75rem]:hidden">
          <button
            type="button"
            role="switch"
            aria-label="Toggle theme"
            :aria-checked="theme === 'dark'"
            class="relative block h-5 w-9 shrink-0 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ec-green)"
            @click="toggleTheme"
          >
            <img
              src="/White%20mode%20switch.png"
              alt=""
              aria-hidden="true"
              draggable="false"
              class="absolute inset-0 size-full object-contain transition-opacity duration-500 ease-in-out select-none motion-reduce:transition-none"
              :class="theme === 'dark' ? 'opacity-0' : 'opacity-100'"
            />
            <img
              src="/Dark%20mode%20switch.png"
              alt=""
              aria-hidden="true"
              draggable="false"
              class="absolute inset-0 size-full object-contain transition-opacity duration-500 ease-in-out select-none motion-reduce:transition-none"
              :class="theme === 'dark' ? 'opacity-100' : 'opacity-0'"
            />
          </button>

          <button
            type="button"
            class="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-(--ec-border) text-(--ec-nav-text) transition-colors hover:bg-(--ec-surface) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ec-green)"
            :aria-expanded="menuOpen"
            aria-label="Menu"
            @click="toggleMobileMenu"
          >
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path v-if="!menuOpen" d="M4 7h16M4 12h16M4 17h16" />
              <path v-else d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>

      <!-- COMPACT MENU PANEL -->
      <div
        v-show="menuOpen"
        class="absolute inset-x-0 top-full flex max-h-[calc(100dvh-4rem)] flex-col items-start overflow-y-auto border-t border-(--ec-border) bg-(--ec-bg) px-4 pt-2 pb-4 text-base text-(--ec-text) shadow-lg min-[75rem]:hidden"
      >
        <a href="/" class="w-full px-1 py-3" @click="closeMobileMenu">Home</a>

        <a href="/apis" class="w-full px-1 py-3" @click="closeMobileMenu">APIs</a>
        <a href="/apis/authorization" class="w-full py-3 pl-5 text-sm text-(--ec-muted)" @click="closeMobileMenu">Authorization API</a>
        <a href="/apis/pesaflow" class="w-full py-3 pl-5 text-sm text-(--ec-muted)" @click="closeMobileMenu">Pesaflow integration</a>

        <a href="/docs" class="w-full px-1 py-3" @click="closeMobileMenu">Documentation</a>
        <a href="/support" class="w-full px-1 py-3" @click="closeMobileMenu">Help &amp; Support</a>
        <a href="/login" class="w-full px-1 py-3" @click="closeMobileMenu">Log in</a>

        <a
          href="/register"
          class="mt-2 inline-flex h-11 w-28 items-center justify-center rounded-full bg-(--ec-nav-reg) text-sm font-medium text-(--ec-reg-text) transition-colors hover:opacity-90"
          @click="closeMobileMenu"
        >Register</a>
      </div>
    </header>

    <main class="flex-1">
      <!-- ================= HERO ================= -->
      <section
        class="mx-auto mt-8 grid w-full max-w-348.25 min-h-[515.4px] grid-cols-1 items-start gap-8 px-4 sm:px-8 md:mt-12 min-[75rem]:mt-17.75 min-[75rem]:mb-37.89 min-[75rem]:grid-cols-[minmax(0,1fr)_473px] min-[75rem]:gap-x-8 min-[75rem]:gap-y-0 min-[75rem]:px-8 min-[90rem]:mx-0 min-[90rem]:mt-0 min-[90rem]:mb-37.89 min-[90rem]:ml-19 min-[90rem]:mr-10.75 min-[94.5rem]:ml-[calc((100%-94.5rem)/2+4.75rem)] min-[90rem]:box-content min-[90rem]:h-[515.4px] min-[90rem]:min-h-0 min-[90rem]:w-[1393px] min-[90rem]:max-w-[calc(100%-119px)] min-[90rem]:grid-cols-[minmax(0,1fr)_473px] min-[90rem]:gap-x-33.75 min-[90rem]:px-0 min-[90rem]:pt-17.75 min-[94.5rem]:grid-cols-[785px_473px]"
      >
        <!-- ================= LEFT HERO CONTENT ================= -->
        <div
          class="flex w-full min-w-0 flex-col min-[90rem]:w-full min-[94.5rem]:w-196.25"
        >
          <!-- HERO LOGO (desktop only; compact screens use the header logo) -->
          <a
            href="/"
            class="hidden shrink-0 min-[75rem]:block min-[75rem]:h-24 min-[75rem]:w-74.25"
          >
            <Transition
              mode="out-in"
              enter-active-class="transition-opacity duration-250 ease-in-out motion-reduce:transition-none"
              leave-active-class="transition-opacity duration-250 ease-in-out motion-reduce:transition-none"
              enter-from-class="opacity-0"
              leave-to-class="opacity-0"
            >
              <img
                v-if="theme !== 'dark'"
                key="light"
                src="/ecitizen%20hero%20logo%20.png"
                alt="eCitizen Developer Sandbox"
                class="h-24 w-74.25 object-contain object-left"
              />

              <img
                v-else
                key="dark"
                src="/Dark%20mode%20ecitizen.png"
                alt="eCitizen Developer Sandbox"
                class="h-10 w-49.5  object-contain object-left"
              />
            </Transition>
          </a>

          <!-- ================= HERO HEADING ================= -->
          <h1
            class="mt-11.25 mb-9 w-196.25 bg-[linear-gradient(100deg,var(--ec-hero-1)_0%,var(--ec-hero-2)_25%,var(--ec-hero-3)_41%,var(--ec-hero-4)_67%,var(--ec-hero-5)_100%)] bg-clip-text text-[34px] leading-[1.15] font-semibold text-transparent sm:text-5xl md:text-6xl min-[75rem]:text-6xl min-[75rem]:leading-[1.1] min-[90rem]:w-full min-[90rem]:text-[70px] min-[90rem]:whitespace-nowrap "
          >
            Innovation
            <span
              class="inline-block bg-[linear-gradient(115deg,var(--ec-meets-1)_0%,var(--ec-meets-2)_30%,var(--ec-meets-3)_55%,var(--ec-meets-4)_78%,var(--ec-meets-5)_100%)] bg-clip-text text-transparent"
            >Meets</span><br class="hidden min-[75rem]:block" />
            Integration.
          </h1>

          <!-- ================= HERO DESCRIPTION ================= -->
          <div
            class="mt-9 h-auto w-full max-w-154.5 text-sm leading-[1.45] font-light text-(--ec-text) min-[90rem]:mt-9"
          >
            <p class="w-full">
              DEV eCitizen, is a controlled and isolated environment designed exclusively for developers,
              learners, and creators. It’s a place where you can dive into coding, explore technologies, and
              experiment with different approaches—all without the fear of affecting your live systems or
              projects.
            </p>

            <p class="mt-4 w-full">
              Effortless Testing: No more deploying code with crossed fingers. Test your applications, APIs,
              and integrations rigorously in an environment that mimics real-world conditions.
            </p>
          </div>
        </div>

        <!-- ================= HERO ARTWORK ================= -->
        <div
          class="relative flex w-full min-w-0 items-center justify-center justify-self-center min-[75rem]:mt-2.5 min-[75rem]:h-126.36 min-[75rem]:w-118.25 min-[75rem]:justify-self-end min-[90rem]:w-[473px]"
        >
          <!-- GLOW: DARK MODE ONLY -->
          <Transition
            enter-active-class="transition-opacity duration-500 ease-in-out motion-reduce:transition-none"
            leave-active-class="transition-opacity duration-500 ease-in-out motion-reduce:transition-none"
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
          >
            <span
              v-if="theme === 'dark'"
              aria-hidden="true"
              class="pointer-events-none absolute top-1/2 left-1/2 z-0 size-[170%] -translate-1/2 rounded-full bg-[radial-gradient(closest-side,var(--ec-glow)_0%,rgba(34,120,70,0.05)_55%,transparent_100%)]"
            ></span>
          </Transition>

          <!-- MASK IMAGE LINK -->
          <a
            href="/docs"
            class="relative z-10 block h-full w-full min-w-0"
          >
            <img
              src="/Art%20mask%20logo%20.png"
              alt="eCitizen hero artwork"
              class="block h-auto w-full max-w-full object-contain object-center min-[75rem]:h-full min-[75rem]:w-full"
            />
          </a>
        </div>
      </section>

      <!-- ================= AUTHORIZATION API ================= -->
      <section
        class="mx-26.25 mt-16 flex w-full max-w-337.5 flex-col items-center px-4 text-center sm:px-8 md:mt-24 min-[75rem]:mt-50.75 min-[75rem]:px-0"
      >
        <p
          class="ml-93.25 mr-93.25 w-191.5 h-6 mt-37.89 text-center font-['Inter'] text-base leading-6 font-semibold text-[#18D75D] min-[75rem]:mt-[37.89px]"
        >
          API
        </p>

        <h2 class="whitespace-nowrap mt-3 w-191.5 h-11 ml-93.25 mr-93.25 text-center text-[24px] leading-[1.2] font-semibold sm:text-3xl md:text-[48px]">
  eCitizen Authorization API v2.0.0
</h2>

        <!-- NAVIGATION PILLS (theme aware) -->
        <div
          class="w-51.25 h-7.5 ml-74.5 mr-65.75 mt-16.75 mb-7.75  pt-1 pb-1 flex items-center gap-2 rounded-full bg-(--ec-chip-on-bg) py-1 pr-1 pl-3 text-xs leading-4.5 font-medium whitespace-nowrap text-(--ec-chip-on-text) "
        >
          <a href="/try" class="shrink-0">Try it out below</a>
          <a href="/docs" class="shrink-0 rounded-full bg-(--ec-chip-bg) px-1.5 py-0.5">Click through</a>
        </div>

        <!-- API SECTION IMAGES: phone (226 x 464) + laptop (764.97 x 467), gap 32, each its own link -->
        <div class="mx-auto mt-7.75 flex w-full max-w-[1022.97px] items-center gap-8">
          <!-- PHONE (226 x 464) -->
          <a
            href="/apis/authorization/phone"
            class="block  aspect-226/464 w-[22.09%] shrink-0"
          >
            <img
              src="/Ecitizen phone.png"
              alt="eCitizen app on a phone"
              width="226"
              height="464"
              class="block mb-30.25 size-full origin-center -translate-x-[27.4%] translate-y-[11%] scale-[2.11] object-contain object-center"
            />
          </a>

          <!-- LAPTOP (764.97 x 467) -->
          <a
            href="/apis/authorization/laptop"
            class="block aspect-[764.97/467] min-w-0 flex-1"
          >
            <img
              src="/E-citizen laptop.png"
              alt="One Login screen on a laptop"
              width="765"
              height="467"
              class="block mb-30.25 size-full object-contain object-bottom"
            />
          </a>
        </div>

        <!-- AUTHORIZATION OPTIONS (row 1302 x 213, cards 412.67 x 181, separating line margin 2) -->
        <div
          class="mx-auto mt-30.25  mb-13.75  ml-26.25 mr-26.25 px-4 pt-4 pb-4  grid w-full max-w-xl grid-cols-1 gap-4 text-left min-[56.25rem]:max-w-none min-[56.25rem]:grid-cols-3 m min-[75rem]:h-53.25 min-[75rem]:max-w-325.5 min-[75rem]:gap-2"
        >
          <!-- PASSWORD -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[75rem]:h-45.25 min-[75rem]:max-w-[412.67px] min-[75rem]:pl-6"
            :class="active.auth === 0 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
           <a
  href="/apis/authorization/password"
  class="mb-4 inline-flex h-11.25 items-center gap-2.5 rounded-full px-4 font-['Lexend'] text-base font-semibold leading-6 whitespace-nowrap transition-colors min-[75rem]:mb-8 min-[75rem]:w-61.75"
  :class="active.auth === 0
    ? 'bg-(--ec-pill-on-bg-auth) text-(--ec-pill-on-text)'
    : 'bg-(--ec-pill-bg) text-(--ec-pill-text) hover:bg-(--ec-surface)'"
  @click.prevent="setActive('auth', 0)"
>
  <img
    src="/Sign in with password .png"
    alt=""
    aria-hidden="true"
    width="20"
    height="20"
    class="size-5 shrink-0 object-contain"
  />
  Sign in with Password
</a>

            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[75rem]:min-h-18">
              An all-in-one customer service platform that helps<br class="hidden min-[75rem]:block" /> you balance everything your customers need to be<br class="hidden min-[75rem]:block" /> happy.
            </p>
          </div>

          <!-- DIGITAL ID -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[75rem]:h-45.25 min-[75rem]:max-w-[412.67px] min-[75rem]:pl-6"
            :class="active.auth === 1 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
            <a
              href="/apis/authorization/digital-id"
              class="mb-4 inline-flex h-11.25 items-center gap-2.5 rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-colors min-[75rem]:mb-8 min-[75rem]:w-61.75"
              :class="active.auth === 1
                ? 'bg-(--ec-pill-on-bg-auth) text-(--ec-pill-on-text)'
                : 'bg-(--ec-pill-bg) text-(--ec-pill-text) hover:bg-(--ec-surface)'"
              @click.prevent="setActive('auth', 1)"
            >
              <img
                src="/sign in with digital ID.png"
                alt=""
                aria-hidden="true"
                width="20"
                height="20"
                class="size-5 shrink-0 object-contain"
              />
              Sign in with Digital ID
            </a>

            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[75rem]:min-h-18">
              Whether you have a team of 2 or 200, our shared <br class="hidden min-[75rem]:block" /> team inboxes keep everyone on the same page <br class="hidden min-[75rem]:block" />and in the loop.
            </p>
          </div>

          <!-- MCDAs -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[75rem]:h-45.25 min-[75rem]:max-w-[412.67px] min-[75rem]:pl-6"
            :class="active.auth === 2 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
        <a
  href="/apis/authorization/mcdas"
  class="mb-4 inline-flex h-11.25 w-31.75 items-center gap-2.5 rounded-full px-4 font-['Lexend'] text-base font-semibold leading-6 whitespace-nowrap transition-colors"
  :class="active.auth === 2
    ? 'bg-(--ec-pill-on-bg-auth) text-(--ec-pill-on-text)'
    : 'bg-(--ec-pill-bg) text-(--ec-pill-text) hover:bg-(--ec-surface)'"
  @click.prevent="setActive('auth', 2)"
>
  <img
    src="/MCDA.png"
    alt=""
    aria-hidden="true"
    width="20"
    height="20"
    class="size-5 shrink-0 object-contain"
  />
  MCDAs
</a>

            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[75rem]:min-h-18">
              An all-in-one customer service platform that helps<br class="hidden min-[75rem]:block" /> you balance everything your customers need to be<br class="hidden min-[75rem]:block" /> happy.
            </p>
          </div>
        </div>

        <!-- LEARN MORE -->
        <a
          href="/apis/authorization"
          class="w-32 h-12  ml-173  mr-173 inline-flex  items-center justify-center rounded-full bg-(--ec-btn-bg) text-sm font-semibold text-(--ec-btn-text) transition-colors hover:bg-(--ec-btn-bg-hover)"
        >
          Learn More
        </a>
      </section>

      <!-- ================= PESAFLOW INTEGRATION (mirrors AUTHORIZATION API) ================= -->
      <section
        class="mx-26.25 mt-47.75 flex w-full max-w-337.5 flex-col items-center px-4 text-center sm:px-8   min-[75rem]:px-0"
      >
        <p
          class="ml-93.25 mr-93.25 w-191.5 h-6 mt-37.89 text-center font-['Inter'] text-base leading-6 font-semibold text-[#18D75D] min-[75rem]:mt-[37.89px]"
        >
          API
        </p>

        <h2 class="mt-3 w-191.5 h-11 ml-93.25 mr-93.25  text-center text-2xl leading-[1.2] font-semibold sm:text-3xl md:text-[40px]">
          Pesaflow integration
        </h2>


        <!-- PESAFLOW SECTION IMAGES: phone (226 x 464) + laptop (764.97 x 467), gap 32, each its own link -->
        <div class="mx-auto mt-7.75 flex w-full max-w-[1022.97px] items-center gap-8">
          <!-- PHONE (226 x 464) -->
          <a
            href="/apis/pesaflow/phone"
            class="block  aspect-226/464 w-[22.09%] shrink-0"
          >
            <img
              src="/Pesa Flow phone.png"
              alt="Pesaflow payment method screen on a phone"
              width="226"
              height="464"
              class="block  size-full origin-center -translate-x-[27.4%] translate-y-[11%] scale-[2.11] object-contain object-center"
            />
          </a>

          <!-- LAPTOP (764.97 x 467) -->
          <a
            href="/apis/pesaflow/laptop"
            class="block aspect-[764.97/467] min-w-0 flex-1"
          >
            <img
              src="/Pesa flow laptop.png"
              alt="Pesaflow payment method screen on a laptop"
              width="765"
              height="467"
              class="block size-full object-contain object-bottom"
            />
          </a>
        </div>

        <!-- PESAFLOW OPTIONS (row 1302 x 213, cards 412.67 x 181, separating line margin 2) -->
        <div
          class="mx-auto mt-30.25  mb-15  ml-26.25 mr-26.25 px-4 pt-4 pb-4  grid w-full max-w-xl grid-cols-1 gap-4 text-left min-[56.25rem]:max-w-none min-[56.25rem]:grid-cols-3 min-[75rem]:h-53.25 min-[75rem]:max-w-325.5 min-[75rem]:gap-2"
        >
          <!-- MAKE PAYMENT -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[75rem]:h-45.25 min-[75rem]:max-w-[412.67px] min-[75rem]:pl-6"
            :class="active.pesa === 0 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
          <a
  href="/apis/pesaflow/make-payment"
  class="mb-4 inline-flex h-11.25 items-center gap-2.5 rounded-full px-4 font-['Lexend'] text-base font-semibold leading-6 whitespace-nowrap transition-colors min-[75rem]:mb-8 min-[75rem]:w-47.75"
  :class="active.pesa === 0
    ? 'bg-(--ec-pill-on-bg-auth) text-(--ec-pill-on-text)'
    : 'bg-(--ec-pill-bg) text-(--ec-pill-text) hover:bg-(--ec-surface)'"
  @click.prevent="setActive('pesa', 0)"
>
  <img
    src="/MCDA.png"
    alt=""
    aria-hidden="true"
    width="20"
    height="20"
    class="size-5 shrink-0 object-contain"
  />
  Make payment
</a>
            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[75rem]:min-h-18">
              An all-in-one customer service platform that helps<br class="hidden min-[75rem]:block" /> you balance everything your customers need to be<br class="hidden min-[75rem]:block" /> happy.
            </p>
          </div>

          <!-- CHECKOUT -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[75rem]:h-45.25 min-[75rem]:max-w-[412.67px] min-[75rem]:pl-6"
            :class="active.pesa === 1 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
            <a
              href="/apis/pesaflow/checkout"
              class="mb-4 inline-flex h-11.25 items-center gap-2.5 rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-colors min-[75rem]:mb-8 min-[75rem]:w-35.25"
              :class="active.pesa === 1
                ? 'bg-(--ec-pill-on-bg-auth) text-(--ec-pill-on-text)'
                : 'bg-(--ec-pill-bg) text-(--ec-pill-text) hover:bg-(--ec-surface)'"
              @click.prevent="setActive('pesa', 1)"
            >
              <img
                src="/sign in with digital ID.png"
                alt=""
                aria-hidden="true"
                width="20"
                height="20"
                class="size-5 shrink-0 object-contain"
              />
              Checkout
            </a>

            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[75rem]:min-h-18">
              Whether you have a team of 2 or 200, our shared <br class="hidden min-[75rem]:block" /> team inboxes keep everyone on the same page <br class="hidden min-[75rem]:block" />and in the loop.
            </p>
          </div>

          <!-- CONFIGURE CHANNELS -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[75rem]:h-45.25 min-[75rem]:max-w-[412.67px] min-[75rem]:pl-6"
            :class="active.pesa === 2 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
       <a
  href="/apis/pesaflow/configure-channels"
  class="mb-4 inline-flex h-11.25 items-center gap-2.5 rounded-full px-4 font-['Lexend'] text-base font-semibold leading-6 whitespace-nowrap transition-colors min-[75rem]:mb-8 min-[75rem]:w-56.5"
  :class="active.pesa === 2
    ? 'bg-(--ec-pill-on-bg-auth) text-(--ec-pill-on-text)'
    : 'bg-(--ec-pill-bg) text-(--ec-pill-text) hover:bg-(--ec-surface)'"
  @click.prevent="setActive('pesa', 2)"
>
  <img
    src="/MCDA.png"
    alt=""
    aria-hidden="true"
    width="20"
    height="20"
    class="size-5 shrink-0 object-contain"
  />
  Configure channels
</a>

            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[75rem]:min-h-18">
              An all-in-one customer service platform that helps<br class="hidden min-[75rem]:block" /> you balance everything your customers need to be<br class="hidden min-[75rem]:block" /> happy.
            </p>
          </div>
        </div>

        <!-- LEARN MORE -->
        <a
          href="/apis/pesaflow"
          class="w-32 h-12   mb-32.5  ml-179 mr-167 inline-flex  items-center justify-center rounded-full bg-(--ec-btn-bg) text-sm font-semibold text-(--ec-btn-text) transition-colors hover:bg-(--ec-btn-bg-hover)"
        >
          Learn More
        </a>
      </section>

      <!-- ================= INSTANT ENVIRONMENTS BANNER ================= -->
      <section class="relative mx-auto mb-12  h-72 w-full max-w-378 sm:h-96 md:h-130 min-[75rem]:mb-24.7 min-[75rem]:h-198.25">
        <a href="/environments" class="relative block size-full">
          <img src="/Rectangle%209.png" alt="Developer working at a desk" class="size-full object-cover grayscale" />
          <div class="w-378 h-198.25 absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h2
              class="whitespace-nowrap max-w-214.75 h-70.5  mb-4.75 text-3xl leading-[1.2] font-semibold sm:text-5xl md:text-7xl min-[86.25rem]:text-[96px]"
            >Instant developer <br class="hidden min-[75rem]:block" />  environments</h2>
          <span
  class="mb-35.25 ml-169.5 mr-169.75 h-15 w-38.75 px-7 py-4 font-['Inter'] text-lg leading-7 font-semibold transition-colors hover:text-[#18D75D]"
>
  Learn More
</span>
          </div>
        </a>
      </section>

       <!-- ================= LATEST NEWS ================= -->
      <section class="mx-auto mb-12 ml-19.75 w-full max-w-338.25 px-4 text-center sm:px-8 min-[75rem]:mb-6.75 min-[75rem]:px-0">
        <h2
          class="mx-auto mb-5 max-w-3xl h-11 font-['Inter'] text-2xl leading-11 font-semibold text-(--ec-muted) sm:text-3xl md:text-[36px] min-[75rem]:mt-24"
        >Latest News</h2>
       <p class="mx-auto mt-2 mb-10 max-w-3xl font-['Inter'] text-base leading-7.5 text-(--ec-muted) md:text-lg lg:text-xl md:mb-16">
  Interviews, tips, guides, industry best practices, and news.
</p> 
 
        <div class="mx-auto mt-16 mb-16 grid w-338.25 h-97   grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-3 ">
          <article>
            <a href="/news/sign-in-with-digital-id" class="block overflow-hidden rounded-lg">
              <img
                src="/Sign%20in%20with%20digital%20.png"
                alt="Sign in with Digital ID"
                class="h-60 w-107.41 mb-8  w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-60"
              />
            </a>
          <p class="w-107.41 h-5 mt-5 mb-2 font-['Inter'] text-sm font-semibold leading-5 text-[#14B04C]">
  16 Jan 2022
</p>
            <a
              href="/news/sign-in-with-digital-id"
              class="w-107.4 h-8 mb-2  flex items-start justify-between gap-2 text-lg font-['Inter'] font-semibold  lg:text-xl leading-8 text-(--ec-muted) hover:text-(--ec-green-text)"
            >
              Sign in with Digital ID
              <svg class=" w-6 h-7 size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M8 7h9v9" /></svg>
            </a>
            <p class="w-107.4 h-12 text-(--ec-muted) font-['Inter'] text-sm leading-6">
              Mental models are simple expressions of complex<br class="hidden min-[75rem]:block" /> processes or relationships.
            </p>
          </article>

          <article>
            <a href="/news/what-is-wireframing" class="block overflow-hidden rounded-lg">
              <img
                src="/Reframing.png"
                alt="What is Wireframing?"
                class="h-60 w-107.41 mb-8  w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-60"
              />
            </a>
            <p class="w-107.41 h-5 mt-5 mb-2 font-['Inter'] text-sm font-semibold leading-5 text-[#14B04C]">
              15 Jan 2022
            </p>
            <a
              href="/news/what-is-wireframing"
              class="w-107.4 h-8 mb-2  flex items-start justify-between gap-2 text-lg font-['Inter'] font-semibold  lg:text-xl leading-8 text-(--ec-muted) hover:text-(--ec-green-text)"
            >
              What is Wireframing?
              <svg class=" w-6 h-7 size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M8 7h9v9" /></svg>
            </a>
            <p class="w-107.4 h-12 text-(--ec-muted) font-['Inter'] text-sm leading-6">
              Introduction to Wireframing and its Principles. Learn<br class="hidden min-[75rem]:block" /> from the best in the industry.
            </p>
          </article>

          <article class="sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:mx-0 lg:w-auto">
            <a href="/news/payment-checkout" class="block overflow-hidden rounded-lg">
              <img
                src="/Payment%20checkout.png"
                alt="Payment Checkout"
                class="h-60 w-107.41 mb-8  w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-60"
              />
            </a>
            <p class="w-107.41 h-5 mt-5 mb-2 font-['Inter'] text-sm font-semibold leading-5 text-[#14B04C]">
              14 Jan 2022
            </p>
            <a
              href="/news/payment-checkout"
              class="w-107.4 h-8 mb-2  flex items-start justify-between gap-2 text-lg font-['Inter'] font-semibold  lg:text-xl leading-8 text-(--ec-muted) hover:text-(--ec-green-text)"
            >
              Payment Checkout
              <svg class=" w-6 h-7 size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M8 7h9v9" /></svg>
            </a>
            <p class="w-107.4 h-12 text-(--ec-muted) font-['Inter'] text-sm leading-6">
              Collaboration can make our teams stronger, and our<br class="hidden min-[75rem]:block" /> individual designs better.
            </p>
          </article>
        </div>

        <a
          href="/news"
          class=" inline-flex h-12 items-center justify-center rounded-full bg-(--ec-btn-bg) px-8 text-sm font-semibold text-(--ec-btn-text) transition-colors hover:bg-(--ec-btn-bg-hover) min-[75rem]:mb-6.75"
        >View All</a>
      </section>
    </main>
 
    <!-- ================= FOOTER ================= -->
    <footer class="w-full bg-(--ec-footer-bg) text-white">
      <div class="mx-auto w-full max-w-378 px-4 pt-10 pb-6 sm:px-8 min-[75rem]:min-h-79.25 min-[75rem]:px-25.5 min-[75rem]:pt-14">
        <!-- FOOTER TOP CONTENT -->
        <div class="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div class="max-w-80">
            <a href="/" class="inline-block">
              <img src="/Footer%20frame.png" alt="eCitizen" class="h-11 w-55.25 max-w-full object-contain object-left" />
            </a>
 
            <p class="mt-6 text-sm leading-6 text-gray-200 min-[75rem]:mt-8">
              Giving Kenyans easy access to automated<br class="hidden min-[75rem]:block" />
              services.
            </p>
          </div>
 
          <nav class="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium md:mt-10" aria-label="Footer">
            <a href="/support" class="transition-colors hover:text-(--ec-green-text)">Help</a>
            <a href="/privacy" class="transition-colors hover:text-(--ec-green-text)">Privacy</a>
            <a href="/terms" class="transition-colors hover:text-(--ec-green-text)">Terms &amp; Conditions</a>
          </nav>
        </div>
 
        <!-- FOOTER BOTTOM CONTENT -->
        <div
          class="mt-10 flex flex-col gap-5 border-t border-white/15 pt-6 text-sm text-gray-200 sm:flex-row sm:items-center sm:justify-between min-[75rem]:mt-13.5 min-[75rem]:pt-7"
        >
          <p>© 2023 eCitizen. All rights reserved.</p>
 
          <!-- SOCIAL MEDIA ICONS (3 x 24px, 24px gap) -->
          <div class="flex h-6 w-30 items-center gap-6">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              class="block transition-opacity hover:opacity-70"
            >
              <img src="/App x icon.png" alt="" aria-hidden="true" width="24" height="24" class="size-6 object-contain" />
            </a>
 
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="block transition-opacity hover:opacity-70"
            >
              <img src="/LinkedIn icon.png" alt="" aria-hidden="true" width="24" height="24" class="size-6 object-contain" />
            </a>
 
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="block transition-opacity hover:opacity-70"
            >
              <img src="/Facebook icon.png" alt="" aria-hidden="true" width="24" height="24" class="size-6 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
 
<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, watch } from 'vue'
 
/* =====================================================================
   SCRIPT = BEHAVIOUR ONLY
   All styling lives in the template as Tailwind classes.
   This file only holds how each section works:
     1. Theme (light / dark)
     2. Nav bar (APIs dropdown, mobile menu)
     3. Option tabs (Authorization API + Pesaflow)
   ===================================================================== */
 
/* ---------- 1. THEME ---------- */
const THEME_KEY = 'ec-theme'
const theme = ref('light') // 'light' | 'dark'
 
function setMeta(name, content) {
  let el = document.head.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}
 
function applyTheme(value) {
  const root = document.documentElement
  root.setAttribute('data-theme', value)
  root.style.colorScheme = value
  setMeta('color-scheme', value)
  setMeta('darkreader-lock', '')
}
 
function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
 
function getInitialTheme() {
  let saved = null
  try { saved = localStorage.getItem(THEME_KEY) } catch (e) { /* storage blocked */ }
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
 
watch(theme, (value) => {
  applyTheme(value)
  try { localStorage.setItem(THEME_KEY, value) } catch (e) { /* ignore */ }
})
 
/* ---------- 2. NAV BAR ---------- */
const apiOpen = ref(false)
const menuOpen = ref(false)
 
function toggleApiMenu() {
  apiOpen.value = !apiOpen.value
}
 
function toggleMobileMenu() {
  menuOpen.value = !menuOpen.value
}
 
function closeMobileMenu() {
  menuOpen.value = false
}
 
// Close the APIs dropdown when clicking anywhere outside it
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
 
// Close the mobile menu if the window is resized up to the desktop layout
function onResize() {
  if (window.innerWidth >= 1200) menuOpen.value = false
}
 
/* ---------- 3. OPTION TABS ---------- */
const active = reactive({ auth: 1, pesa: 1 })
 
// group: 'auth' (Authorization API) | 'pesa' (Pesaflow)
function setActive(group, index) {
  active[group] = index
}
 
/* ---------- LIFECYCLE ---------- */
onMounted(() => {
  theme.value = getInitialTheme()
  applyTheme(theme.value)
 
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
  window.addEventListener('resize', onResize)
 
  // Enable the smooth theme transition only after the initial theme has painted
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.add('ec-theme-ready')
    })
  })
})
 
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', onResize)
  document.documentElement.classList.remove('ec-theme-ready')
})
</script>
 
<style>
/* ================= THEME TOKENS (light, default) ================= */
 
:root {
  --ec-bg: #ffffff;
  --ec-text: #1a1a1a;
  --ec-muted: #222222;
  --ec-surface: #e6e6e6;
  --ec-border: #e4e7ec;
  --ec-nav-text: #1f1f1f;
  --ec-nav-home:#18D75D;
  --ec-nav-regwhite:#15B76C;
  --ec-nav-reg: var(--ec-nav-regwhite);
  --ec-nav-active: #5db872;
  --ec-green: #4fae72;
  --ec-green-strong: #439a63;
  --ec-green-text: #14b04c;
  --ec-search-bg: rgba(255, 255, 255, 0.7);
  --ec-search-border: #d6d6d6;
  --ec-search-icon: #9a9a9a;
  --ec-reg-bg: #15b76c;
  --ec-reg-bg-hover: #109a5a;
  --ec-reg-text: #ffffff;
  --ec-tab-bar: #e4e7ec;
  --ec-pill-bg: #e6e6e6;
  --ec-pill-text: #222222;
  --ec-pill-on-bg: #14b04c;
  --ec-pill-on-bg-auth: #0a993d;
  --ec-pill-on-text: #ffffff;
  --ec-chip-bg: #ffffff;
  --ec-chip-on-bg: #e3f5ea;
  --ec-chip-on-text: #067647;
  --ec-btn-bg: #14b04c;
  --ec-btn-bg-hover: #109a3e;
  --ec-btn-text: #ffffff;
  --ec-footer-bg: #090909;
  --ec-hero-1: rgba(4, 85, 33, 0.7);
  --ec-hero-2: #1e9034;
  --ec-hero-3: #7dcc70;
  --ec-hero-4: #a9bf36;
  --ec-hero-5: #db6900;
  --ec-glow: rgba(34, 120, 70, 0);
  --ec-meets-1: #74b86a;
  --ec-meets-2: #98ca70;
  --ec-meets-3: #aebf46;
  --ec-meets-4: #b8a63e;
  --ec-meets-5: #c4852f;
  --ec-news-title: #222222;
 
  color-scheme: light;
}
 
/* ================= THEME TOKENS (dark) ================= */
 
:root[data-theme='dark'] {
  --ec-bg: #151515;
  --ec-text: #f2f2f2;
  --ec-muted: #fff7f5;
  --ec-surface: #232323;
  --ec-border: #333333;
  --ec-nav-text: #f2f2f2;
  --ec-nav-active: #5ed06f;
  --ec-nav-home:#18D75D;
  --ec-nav-regdark:#18D75D;
  --ec-nav-reg: var(--ec-nav-regdark);
  --ec-green: #62d67c;
  --ec-green-strong: #52c46c;
  --ec-search-bg: rgba(35, 35, 35, 0.6);
  --ec-search-border: #3b3b3b;
  --ec-search-icon: #8a8a8a;
  --ec-tab-bar: #333333;
  --ec-pill-bg: #222222;
  --ec-pill-text: #c5c5c5;
  --ec-chip-bg: #232323;
  --ec-chip-on-bg: #1f3a29;
  --ec-chip-on-text: #7fe39a;
  --ec-footer-bg: #0a0a0a;
  --ec-glow: rgba(34, 120, 70, 0.14);
  --ec-news-title: #fff7f5;
 
  color-scheme: dark;
}
 
/* ================= PAGE BACKGROUND ================= */
 
html {
  min-height: 100%;
  background-color: var(--ec-bg);
}
 
/* ================= REGISTERED COLOUR PROPERTIES (smooth theme fade) ================= */
 
@property --ec-bg { syntax: '<color>'; inherits: true; initial-value: #ffffff; }
@property --ec-text { syntax: '<color>'; inherits: true; initial-value: #1a1a1a; }
@property --ec-muted { syntax: '<color>'; inherits: true; initial-value: #222222; }
@property --ec-surface { syntax: '<color>'; inherits: true; initial-value: #e6e6e6; }
@property --ec-border { syntax: '<color>'; inherits: true; initial-value: #e4e7ec; }
@property --ec-nav-text { syntax: '<color>'; inherits: true; initial-value: #1f1f1f; }
@property --ec-nav-active { syntax: '<color>'; inherits: true; initial-value: #5db872; }
@property --ec-green { syntax: '<color>'; inherits: true; initial-value: #4fae72; }
@property --ec-green-strong { syntax: '<color>'; inherits: true; initial-value: #439a63; }
@property --ec-search-bg { syntax: '<color>'; inherits: true; initial-value: rgba(255, 255, 255, 0.7); }
@property --ec-search-border { syntax: '<color>'; inherits: true; initial-value: #d6d6d6; }
@property --ec-search-icon { syntax: '<color>'; inherits: true; initial-value: #9a9a9a; }
@property --ec-tab-bar { syntax: '<color>'; inherits: true; initial-value: #e4e7ec; }
@property --ec-pill-bg { syntax: '<color>'; inherits: true; initial-value: #e6e6e6; }
@property --ec-pill-text { syntax: '<color>'; inherits: true; initial-value: #222222; }
@property --ec-chip-bg { syntax: '<color>'; inherits: true; initial-value: #ffffff; }
@property --ec-chip-on-bg { syntax: '<color>'; inherits: true; initial-value: #e3f5ea; }
@property --ec-chip-on-text { syntax: '<color>'; inherits: true; initial-value: #067647; }
@property --ec-footer-bg { syntax: '<color>'; inherits: true; initial-value: #090909; }
@property --ec-glow { syntax: '<color>'; inherits: true; initial-value: rgba(34, 120, 70, 0); }
@property --ec-news-title { syntax: '<color>'; inherits: true; initial-value: #222222; }
 
/* ================= SMOOTH THEME SWITCH ================= */
 
html.ec-theme-ready {
  transition: all 0.6s ease-in-out;
}
 
@media (prefers-reduced-motion: reduce) {
  html.ec-theme-ready {
    transition: none;
  }
}
</style>