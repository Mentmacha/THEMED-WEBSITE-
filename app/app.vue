<template>
  <div
    class="ec-root w-full max-w-none overflow-x-clip font-['Lexend',sans-serif] text-(--ec-text)"
    :class="{ 'ec-ready': ready }"
    :data-theme="theme"
  >
    <!-- ================= NAV BAR (sticky + glass) ================= -->
    <header
      class="sticky top-0 z-30 border-b border-(--ec-glass-border) bg-(--ec-glass-bg) shadow-[inset_0_1px_0_var(--ec-glass-inset),0_8px_30px_var(--ec-glass-drop)] backdrop-blur-[18px] backdrop-saturate-160"
    >
      <div
        class="mx-auto flex w-full max-w-378 items-center justify-between px-4 py-3 min-[1200px]:justify-start min-[1200px]:p-0"
      >
        <!-- COMPACT ONLY: logo -->
        <a href="/" class="shrink-0 min-[1200px]:hidden" aria-label="eCitizen Developer Sandbox">
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

        <!-- DESKTOP NAV (1200px and up) -->
        <ul
          class="mr-13.73 ml-20.25 mt-6.25 hidden h-11 w-full max-w-344 min-w-0 items-center text-xs font-normal text-(--ec-nav-text) min-[1200px]:flex"
        >
          <!-- HOME -->
          <li class="shrink-0">
            <a
              href="/"
              class="flex h-6 w-16.25 items-center text-xs font-semibold leading-6 text-(--ec-green) transition-colors hover:text-(--ec-green-strong)"
            >
              Home
            </a>
          </li>

          <!-- APIs WITH CLICK DROPDOWN -->
          <li data-menu class="relative ml-14.25 flex h-6 w-20 shrink-0 items-center gap-2">
            <a
              href="/apis"
              class="flex items-center text-xs font-normal leading-6 transition-colors hover:text-(--ec-nav-active)"
            >
              APIs
            </a>

            <button
              type="button"
              aria-label="Toggle APIs menu"
              :aria-expanded="apiOpen"
              class="flex h-6 w-6 cursor-pointer items-center justify-center"
              @click="apiOpen = !apiOpen"
            >
              <svg
                class="h-4.5 w-4.5 transition-transform duration-300"
                :class="apiOpen ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div v-show="apiOpen" class="absolute left-0 top-full z-50 pt-2">
              <ul class="w-44 rounded-xl border border-(--ec-border) bg-(--ec-bg) py-2 shadow-lg">
                <li>
                  <a
                    href="/apis/authorization"
                    class="block px-4 py-2 text-xs text-(--ec-muted) transition-colors hover:bg-(--ec-surface) hover:text-(--ec-nav-active)"
                  >
                    Authorization API
                  </a>
                </li>
                <li>
                  <a
                    href="/apis/pesaflow"
                    class="block px-4 py-2 text-xs text-(--ec-muted) transition-colors hover:bg-(--ec-surface) hover:text-(--ec-nav-active)"
                  >
                    Pesaflow integration
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <!-- DOCUMENTATION -->
          <li class="ml-12.5 shrink-0">
            <a
              href="/docs"
              class="flex h-6 w-31.25 items-center whitespace-nowrap text-xs font-normal leading-6 transition-colors hover:text-(--ec-nav-active)"
            >
              Documentation
            </a>
          </li>

          <!-- HELP & SUPPORT -->
          <li class="ml-14.25 shrink-0">
            <a
              href="/support"
              class="flex h-6 w-31.25 items-center whitespace-nowrap text-xs font-normal leading-6 transition-colors hover:text-(--ec-nav-active)"
            >
              Help &amp; Support
            </a>
          </li>

          <!-- SEARCH FIELD (shrinks on narrower desktops) -->
          <li class="ml-12.25 w-90.25 min-w-32 shrink">
            <form
              role="search"
              class="flex h-8.5 w-full items-center gap-5.5 rounded-full border border-(--ec-search-border) bg-(--ec-search-bg) pl-2 transition-colors focus-within:border-(--ec-nav-active)"
              @submit.prevent
            >
              <a href="/search" aria-label="Search" class="inline-flex shrink-0 text-(--ec-search-icon)">
                <svg class="h-5.75 w-5.75" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35" />
                </svg>
              </a>

              <input
                type="search"
                aria-label="Search"
                class="h-full w-full min-w-0 bg-transparent px-3 text-xs text-(--ec-nav-text) outline-none"
              />
            </form>
          </li>

          <!-- LOG IN + REGISTER + TOGGLE -->
          <li class="flex shrink-0 items-center">
            <a
              href="/login"
              class="ml-12 flex h-11 w-19.75 items-center justify-center whitespace-nowrap text-xs font-medium leading-6 transition-colors hover:text-(--ec-nav-active) min-[1400px]:ml-27.5"
            >
              Log in
            </a>

            <a
              href="/register"
              class="mb-1 ml-3 flex h-10 w-22.25 items-center justify-center rounded-full bg-(--ec-reg-bg) text-xs font-medium text-(--ec-reg-text) transition-colors hover:bg-(--ec-reg-bg-hover)"
            >
              Register
            </a>

            <!-- THEME TOGGLE (desktop) -->
            <button
              type="button"
              role="switch"
              aria-label="Toggle theme"
              :aria-checked="theme === 'dark'"
              class="relative ml-12 mr-13.73 flex h-5 w-9 cursor-pointer items-center rounded-full bg-(--ec-toggle-track)"
              @click="toggleTheme"
            >
              <span
                class="absolute left-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-(--ec-toggle-knob) text-(--ec-toggle-icon) shadow-sm ring-1 ring-black/5 transition-transform duration-500 ease-in-out"
                :class="theme === 'dark' ? 'translate-x-4' : 'translate-x-0'"
              >
                <Transition
                  mode="out-in"
                  enter-active-class="transition-all duration-250 ease-in-out motion-reduce:transition-none"
                  leave-active-class="transition-all duration-200 ease-in-out motion-reduce:transition-none"
                  enter-from-class="scale-40 -rotate-90 opacity-0"
                  leave-to-class="scale-40 rotate-90 opacity-0"
                >
                  <!-- SUN -->
                  <svg
                    v-if="theme !== 'dark'"
                    key="sun"
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
                    <path d="M12 1.5v2M12 20.5v2M1.5 12h2M20.5 12h2M4.6 4.6L6 6M18 18l1.4 1.4M4.6 19.4L6 18M18 6l1.4-1.4" />
                  </svg>
                  <!-- MOON (8.62 x 13.33 crescent, tilted -35deg, centered in the 16 x 16 knob) -->
                  <svg
                    v-else
                    key="moon"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <g transform="rotate(-35 8 8)">
                      <path d="M12.31 1.335A8.62 6.665 0 0 0 12.31 14.665A4.6 6.665 0 0 1 12.31 1.335Z" />
                    </g>
                  </svg>
                </Transition>
              </span>
            </button>
          </li>
        </ul>

        <!-- COMPACT ONLY: theme toggle + hamburger -->
        <div class="flex shrink-0 items-center gap-3 min-[1200px]:hidden">
          <button
            type="button"
            role="switch"
            aria-label="Toggle theme"
            :aria-checked="theme === 'dark'"
            class="relative flex h-5 w-9 cursor-pointer items-center rounded-full bg-(--ec-toggle-track)"
            @click="toggleTheme"
          >
            <span
              class="absolute left-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-(--ec-toggle-knob) text-(--ec-toggle-icon) shadow-sm ring-1 ring-black/5 transition-transform duration-500 ease-in-out"
              :class="theme === 'dark' ? 'translate-x-4' : 'translate-x-0'"
            >
              <Transition
                mode="out-in"
                enter-active-class="transition-all duration-250 ease-in-out motion-reduce:transition-none"
                leave-active-class="transition-all duration-200 ease-in-out motion-reduce:transition-none"
                enter-from-class="scale-40 -rotate-90 opacity-0"
                leave-to-class="scale-40 rotate-90 opacity-0"
              >
                <svg
                  v-if="theme !== 'dark'"
                  key="sun"
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
                  <path d="M12 1.5v2M12 20.5v2M1.5 12h2M20.5 12h2M4.6 4.6L6 6M18 18l1.4 1.4M4.6 19.4L6 18M18 6l1.4-1.4" />
                </svg>
                <svg
                  v-else
                  key="moon"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <g transform="rotate(-35 8 8)">
                    <path d="M12.31 1.335A8.62 6.665 0 0 0 12.31 14.665A4.6 6.665 0 0 1 12.31 1.335Z" />
                  </g>
                </svg>
              </Transition>
            </span>
          </button>

          <button
            type="button"
            class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--ec-border) text-(--ec-nav-text) transition-colors hover:bg-(--ec-surface) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ec-green)"
            :aria-expanded="menuOpen"
            aria-label="Menu"
            @click="menuOpen = !menuOpen"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path v-if="!menuOpen" d="M4 7h16M4 12h16M4 17h16" />
              <path v-else d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>

      <!-- COMPACT MENU PANEL -->
      <div
        v-show="menuOpen"
        class="absolute left-0 right-0 top-full flex max-h-[calc(100dvh-4rem)] flex-col items-start overflow-y-auto border-t border-(--ec-border) bg-(--ec-bg) px-4 pb-4 pt-2 text-base text-(--ec-text) shadow-lg min-[1200px]:hidden"
      >
        <a href="/" class="w-full px-1 py-3" @click="menuOpen = false">Home</a>

        <a href="/apis" class="w-full px-1 py-3" @click="menuOpen = false">APIs</a>
        <a href="/apis/authorization" class="w-full py-3 pl-5 text-sm text-(--ec-muted)" @click="menuOpen = false">Authorization API</a>
        <a href="/apis/pesaflow" class="w-full py-3 pl-5 text-sm text-(--ec-muted)" @click="menuOpen = false">Pesaflow integration</a>

        <a href="/docs" class="w-full px-1 py-3" @click="menuOpen = false">Documentation</a>
        <a href="/support" class="w-full px-1 py-3" @click="menuOpen = false">Help &amp; Support</a>
        <a href="/login" class="w-full px-1 py-3" @click="menuOpen = false">Log in</a>

        <a
          href="/register"
          class="mt-2 inline-flex h-11 w-28 items-center justify-center rounded-full bg-(--ec-reg-bg) text-sm font-medium text-(--ec-reg-text) transition-colors hover:bg-(--ec-reg-bg-hover)"
          @click="menuOpen = false"
        >Register</a>
      </div>
    </header>

    <main>
      <!-- ================= HERO ================= -->
      <section
        class="mx-auto mt-8 grid w-full max-w-378 grid-cols-1 items-start gap-8 px-4 sm:px-8 md:mt-12 min-[1200px]:mt-17.75 min-[1200px]:grid-cols-[1fr_auto] min-[1200px]:gap-0 min-[1200px]:px-20.25"
      >
        <div class="min-w-0">
          <!-- HERO LOGO (desktop only; compact screens use the header logo) -->
          <a href="/" class="hidden min-[1200px]:inline-block">
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
                class="h-24 w-74.25  mb-10.5 object-contain object-left"
              />
              <img
                v-else
                key="dark"
                src="/Dark%20mode%20ecitizen.png"
                alt="eCitizen Developer Sandbox"
                class="h-24 w-74.25 mb-10.5 object-contain object-left"
              />
            </Transition>
          </a>

          <h1
            class="max-w-full bg-[linear-gradient(100deg,var(--ec-hero-1)_0%,var(--ec-hero-2)_25%,var(--ec-hero-3)_41%,var(--ec-hero-4)_67%,var(--ec-hero-5)_100%)] bg-clip-text pb-1 text-[34px] font-semibold leading-[1.15] text-transparent sm:text-5xl md:text-6xl min-[1200px]:mt-9 min-[1200px]:-mb-3 min-[1200px]:w-196.25 min-[1200px]:pb-3 min-[1200px]:text-[70px] min-[1200px]:leading-[1.1] min-[1200px]:whitespace-nowrap"
          >
            Innovation <span class="inline-block bg-[linear-gradient(115deg,var(--ec-meets-1)_0%,var(--ec-meets-2)_30%,var(--ec-meets-3)_55%,var(--ec-meets-4)_78%,var(--ec-meets-5)_100%)] bg-clip-text text-transparent">Meets</span><br class="hidden min-[1200px]:block" />
            Integration.
          </h1>
          <div
            class="mt-6 mb-8 w-full text-sm font-light leading-[1.45] text-(--ec-text) min-[1200px]:mt-9 min-[1200px]:mb-50.75 min-[1200px]:h-34 min-[1200px]:w-154.5"
          >
            <p>
              DEV eCitizen, is a controlled and isolated environment designed exclusively for developers,<br class="hidden min-[1200px]:block" />
              learners, and creators. It’s a place where you can dive into coding, explore technologies, and<br class="hidden min-[1200px]:block" />
              experiment with different approaches—all without the fear of affecting your live systems or<br class="hidden min-[1200px]:block" />
              projects.
            </p>

            <p class="mt-4">
              Effortless Testing: No more deploying code with crossed fingers. Test your applications, APIs,<br class="hidden min-[1200px]:block" />
              and integrations rigorously in an environment that mimics real-world conditions.
            </p>
          </div>
        </div>

        <!-- HERO ARTWORK (subtle glow lives here, directly behind the mask logo only) -->
        <div class="relative justify-self-center min-[1200px]:h-651.14 min-[1200px]:w-651.14 min-[1200px]:justify-self-end">
          <span
            aria-hidden="true"
            class="ec-art-glow pointer-events-none absolute top-1/2 left-1/2 z-0 h-[170%] w-[170%] -translate-x-1/2 -translate-y-1/2"
          ></span>

          <a href="/docs" class="relative z-10 block">
            <img
              src="/Art%20mask%20logo%20.png"
              alt="eCitizen hero artwork"
              class="mx-auto mb-8 h-auto w-full max-w-60 object-contain sm:max-w-100 min-[1200px]:mx-0 min-[1200px]:mt-20.25 min-[1200px]:mb-37.89 min-[1200px]:h-126.25 min-[1200px]:w-118.25 min-[1200px]:max-w-118.25"
            />
          </a>
        </div>
      </section>

      <!-- ================= AUTHORIZATION API ================= -->
      <section
        class="mx-auto mt-16 flex w-full max-w-337.5 flex-col items-center px-4 text-center sm:px-8 md:mt-24 min-[1200px]:mt-50.75 min-[1200px]:px-0"
      >
        <p class="w-full text-center text-xs font-medium text-(--ec-green-text) min-[1200px]:h-6">API</p>

        <h2
          class="mt-3 w-full text-center text-2xl font-semibold leading-[1.2] sm:text-3xl md:text-[40px]"
        >
          eCitizen Authorization API v2.0.0
        </h2>

        <!-- NAVIGATION PILLS (theme aware) -->
<div class="mb-8 mt-10 flex h-7.5 min-[1200px]:mx-70 min-[1200px]:mt-16.5 w-fit items-center justify-center rounded-full bg-(--ec-chip-bg) text-[11px] shadow-sm">
  <a
            href="/try"
            class="rounded-full bg-(--ec-chip-on-bg) px-3 py-1.5 font-medium text-(--ec-chip-on-text)"
          >
            Try it out below
          </a>
          <a href="/docs" class="px-3 py-1.5 text-(--ec-chip-text)">Click through</a>
        </div>

        <!-- API SECTION IMAGE (phone + laptop, 1022 x 675). The aspect ratio sets the height; the image fills the link. -->
        <a
          href="/apis/authorization"
          class="mx-auto mt-8 block aspect-[1022/675] w-full max-w-[1022.97px] md:mt-12"
        >
          <img
            src="/authorization-section-image.png"
            alt="eCitizen app on a phone and One Login screen on a laptop"
            width="1022"
            height="675"
            class="block h-full w-full object-contain object-bottom"
          />
        </a>

        <!-- AUTHORIZATION OPTIONS -->
        <div
          class="mx-auto mt-10 mb-12 grid w-full max-w-xl grid-cols-1 gap-4 text-left min-[900px]:max-w-none min-[900px]:grid-cols-3 min-[1200px]:mt-10 min-[1200px]:mb-27 min-[1200px]:h-53.25 min-[1200px]:max-w-325 min-[1200px]:gap-1"
        >
          <!-- PASSWORD -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[1200px]:h-45.25 min-[1200px]:max-w-103 min-[1200px]:pl-6"
            :class="active.auth === 0 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
            <a
              href="/apis/authorization/password"
              class="mb-4 inline-flex h-11.25 items-center gap-2.5 rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-colors min-[1200px]:mb-8 min-[1200px]:w-61.75"
              :class="pillClass(active.auth === 0, 'auth')"
              @click.prevent="active.auth = 0"
            >
              <img
                src="/Sign in with password .png"
                alt=""
                aria-hidden="true"
                width="20"
                height="20"
                class="h-5 w-5 shrink-0 object-contain"
              />
              Sign in with Password
            </a>

            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[1200px]:min-h-18">
              An all-in-one customer service platform that helps<br class="hidden min-[1200px]:block" /> you balance everything your customers need to be<br class="hidden min-[1200px]:block" /> happy.
            </p>
          </div>

          <!-- DIGITAL ID -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[1200px]:h-45.25 min-[1200px]:max-w-103 min-[1200px]:pl-6"
            :class="active.auth === 1 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
            <a
              href="/apis/authorization/digital-id"
              class="mb-4 inline-flex h-11.25 items-center gap-2.5 rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-colors min-[1200px]:mb-8 min-[1200px]:w-61.75"
              :class="pillClass(active.auth === 1, 'auth')"
              @click.prevent="active.auth = 1"
            >
              <img
                src="/sign in with digital ID.png"
                alt=""
                aria-hidden="true"
                width="20"
                height="20"
                class="h-5 w-5 shrink-0 object-contain"
              />
              Sign in with Digital ID
            </a>

            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[1200px]:min-h-18">
              Whether you have a team of 2 or 200, our shared <br class="hidden min-[1200px]:block" /> team inboxes keep everyone on the same page <br class="hidden min-[1200px]:block" />and in the loop.
            </p>
          </div>

          <!-- MCDAs -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[1200px]:h-45.25 min-[1200px]:max-w-103 min-[1200px]:pl-6"
            :class="active.auth === 2 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
            <a
              href="/apis/authorization/mcdas"
              class="mb-4 inline-flex h-11.25 items-center gap-2.5 rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-colors min-[1200px]:mb-8 min-[1200px]:w-61.75"
              :class="pillClass(active.auth === 2, 'auth')"
              @click.prevent="active.auth = 2"
            >
              <img
                src="/MCDA.png"
                alt=""
                aria-hidden="true"
                width="20"
                height="20"
                class="h-5 w-5 shrink-0 object-contain"
              />
              MCDAs
            </a>

            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[1200px]:min-h-18">
              An all-in-one customer service platform that helps<br class="hidden min-[1200px]:block" /> you balance everything your customers need to be<br class="hidden min-[1200px]:block" /> happy.
            </p>
          </div>
        </div>

        <!-- LEARN MORE -->
        <a
          href="/apis/authorization"
          class="mb-24 inline-flex h-12 w-32 items-center justify-center rounded-full bg-(--ec-btn-bg) px-5 text-sm font-semibold text-(--ec-btn-text) transition-colors hover:bg-(--ec-btn-bg-hover) min-[1200px]:mt-9.75 min-[1200px]:mb-47.75"
        >
          Learn More
        </a>
      </section>

      <!-- ================= PESAFLOW INTEGRATION ================= -->
      <section
        class="mx-auto flex w-full max-w-337.5 flex-col items-center px-4 text-center sm:px-8 min-[1200px]:px-0"
      >
        <p class="w-full text-center text-xs font-medium text-(--ec-green-text) min-[1200px]:h-6">API</p>

        <h2
          class="mt-3 w-full text-center text-2xl font-semibold leading-[1.2] sm:text-3xl md:text-[40px]"
        >
          Pesaflow integration
        </h2>

        <!-- PESAFLOW SECTION IMAGE (phone + laptop, 1023 x 467). The aspect ratio sets the height; the image fills the link. -->
        <a
          href="/apis/pesaflow"
          class="mx-auto mt-8 block aspect-[1022.97/467] w-full max-w-[1022.97px] md:mt-12"
        >
          <img
            src="/PESAFLOW SECTION IMAGE .png"
            alt="eCitizen app on a phone and One Login screen on a laptop"
            width="1023"
            height="467"
            class="block h-full w-full object-contain object-bottom"
          />
        </a>

        <!-- PESAFLOW OPTIONS -->
        <div
          class="mx-auto mt-10 mb-10 grid w-full max-w-xl grid-cols-1 gap-4 text-left min-[900px]:max-w-none min-[900px]:grid-cols-3 min-[1200px]:mt-10 min-[1200px]:mb-9.75 min-[1200px]:h-53.25 min-[1200px]:max-w-325.5 min-[1200px]:gap-1"
        >
          <!-- MAKE PAYMENT -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[1200px]:h-45.25 min-[1200px]:max-w-103 min-[1200px]:pl-6"
            :class="active.pesa === 0 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
            <a
              href="/apis/pesaflow/make-payment"
              class="mb-4 inline-flex h-11.25 items-center gap-2.5 rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-colors min-[1200px]:mb-8 min-[1200px]:w-47.75"
              :class="pillClass(active.pesa === 0)"
              @click.prevent="active.pesa = 0"
            >
              <img
                src="/MCDA.png"
                alt=""
                aria-hidden="true"
                width="20"
                height="20"
                class="h-5 w-5 shrink-0 object-contain"
              />
              Make payment
            </a>

            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[1200px]:min-h-18">
              An all-in-one customer service platform that helps<br class="hidden min-[1200px]:block" /> you balance everything your customers need to be<br class="hidden min-[1200px]:block" /> happy.
            </p>
          </div>

          <!-- CHECKOUT -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[1200px]:h-45.25 min-[1200px]:max-w-103 min-[1200px]:pl-6"
            :class="active.pesa === 1 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
            <a
              href="/apis/pesaflow/checkout"
              class="mb-4 inline-flex h-11.25 items-center gap-2.5 rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-colors min-[1200px]:mb-8"
              :class="pillClass(active.pesa === 1)"
              @click.prevent="active.pesa = 1"
            >
              <img
                src="/sign in with digital ID.png"
                alt=""
                aria-hidden="true"
                width="20"
                height="20"
                class="h-5 w-5 shrink-0 object-contain"
              />
              Checkout
            </a>

            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[1200px]:min-h-18">
              Whether you have a team of 2 or 200, our shared <br class="hidden min-[1200px]:block" /> team inboxes keep everyone on the same page <br class="hidden min-[1200px]:block" />and in the loop.
            </p>
          </div>

          <!-- CONFIGURE CHANNELS -->
          <div
            class="w-full border-l-2 py-4 pr-2 pl-5 min-[1200px]:h-45.25 min-[1200px]:max-w-103 min-[1200px]:pl-6"
            :class="active.pesa === 2 ? 'border-(--ec-green)' : 'border-(--ec-tab-bar)'"
          >
            <a
              href="/apis/pesaflow/configure-channels"
              class="mb-4 inline-flex h-11.25 items-center gap-2.5 rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-colors min-[1200px]:mb-8"
              :class="pillClass(active.pesa === 2)"
              @click.prevent="active.pesa = 2"
            >
              <img
                src="/MCDA.png"
                alt=""
                aria-hidden="true"
                width="20"
                height="20"
                class="h-5 w-5 shrink-0 object-contain"
              />
              Configure channels
            </a>

            <p class="w-full text-sm leading-snug text-(--ec-muted) min-[1200px]:min-h-18">
              An all-in-one customer service platform that helps<br class="hidden min-[1200px]:block" /> you balance everything your customers need to be<br class="hidden min-[1200px]:block" /> happy.
            </p>
          </div>
        </div>

        <!-- LEARN MORE -->
        <a
          href="/apis/pesaflow"
          class="mb-20 inline-flex h-12 w-32 items-center justify-center rounded-full bg-(--ec-btn-bg) px-1.25 text-sm font-semibold text-(--ec-btn-text) transition-colors hover:bg-(--ec-btn-bg-hover) min-[1200px]:mt-9.75 min-[1200px]:mb-32.5"
        >
          Learn More
        </a>
      </section>

      <!-- ================= INSTANT ENVIRONMENTS BANNER ================= -->
      <section
        class="relative mx-auto mb-12 h-72 w-full max-w-378 sm:h-96 md:h-130 min-[1200px]:mb-24.7 min-[1200px]:h-198.25"
      >
        <a href="/environments" class="relative block h-full w-full">
          <img
            src="/Rectangle%209.png"
            alt="Developer working at a desk"
            class="h-full w-full object-cover grayscale"
          />
          <div class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <h2 class="max-w-214.75 text-3xl font-semibold leading-[1.2] sm:text-5xl md:text-7xl min-[1380px]:text-[88px]">
              Instant developer environments
            </h2>
            <span class="mt-6 text-sm min-[1200px]:mt-8.25">Learn More</span>
          </div>
        </a>
      </section>

      <!-- ================= LATEST NEWS ================= -->
      <section class="mx-auto mb-12 w-full max-w-338.25 px-4 text-center sm:px-8 min-[1200px]:mb-6.75 min-[1200px]:px-0">
        <h2 class="mx-auto mb-4 max-w-3xl text-2xl font-medium sm:text-3xl md:text-[32px] min-[1200px]:mt-24 min-[1200px]:mb-12.5">Latest News</h2>
        <p class="mx-auto mt-2 mb-10 max-w-3xl text-center text-base text-(--ec-text) md:mb-16">
          Interviews, tips, guides, industry best practices, and news.
        </p>

        <div class="mx-auto mt-8 grid w-full grid-cols-1 gap-10 text-left sm:grid-cols-2 md:mt-17 md:gap-6 lg:grid-cols-3 min-[1200px]:gap-8">
          <article>
            <a href="/news/sign-in-with-digital-id" class="block overflow-hidden rounded-lg">
              <img
                src="/Sign%20in%20with%20digital%20.png"
                alt="Sign in with Digital ID"
                class="h-52 w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-60"
              />
            </a>
            <p class="mt-5 text-xs font-medium text-(--ec-green-text)">16 Jan 2022</p>
            <a
              href="/news/sign-in-with-digital-id"
              class="mt-1.5 flex items-start justify-between gap-2 text-lg font-medium hover:text-(--ec-green-text)"
            >
              Sign in with Digital ID
              <svg class="mt-1.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M8 7h9v9" /></svg>
            </a>
            <p class="mt-2 text-sm leading-snug text-(--ec-muted)">Mental models are simple expressions of complex<br class="hidden min-[1200px]:block" /> processes or relationships.</p>
          </article>

          <article>
            <a href="/news/what-is-wireframing" class="block overflow-hidden rounded-lg">
              <img
                src="/Reframing.png"
                alt="What is Wireframing?"
                class="h-52 w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-60"
              />
            </a>
            <p class="mt-5 text-xs font-medium text-(--ec-green-text)">15 Jan 2022</p>
            <a
              href="/news/what-is-wireframing"
              class="mt-1.5 flex items-start justify-between gap-2 text-lg font-medium hover:text-(--ec-green-text)"
            >
              What is Wireframing?
              <svg class="mt-1.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M8 7h9v9" /></svg>
            </a>
            <p class="mt-2 text-sm leading-snug text-(--ec-muted)">Introduction to Wireframing and its Principles. Learn<br class="hidden min-[1200px]:block" /> from the best in the industry.</p>
          </article>

          <article class="sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:mx-0 lg:w-auto">
            <a href="/news/payment-checkout" class="block overflow-hidden rounded-lg">
              <img
                src="/Payment%20checkout.png"
                alt="Payment Checkout"
                class="h-52 w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-60"
              />
            </a>
            <p class="mt-5 text-xs font-medium text-(--ec-green-text)">14 Jan 2022</p>
            <a
              href="/news/payment-checkout"
              class="mt-1.5 flex items-start justify-between gap-2 text-lg font-medium hover:text-(--ec-green-text)"
            >
              Payment Checkout
              <svg class="mt-1.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M8 7h9v9" /></svg>
            </a>
            <p class="mt-2 text-sm leading-snug text-(--ec-muted)">Collaboration can make our teams stronger, and our<br class="hidden min-[1200px]:block" /> individual designs better.</p>
          </article>
        </div>

        <a
          href="/news"
          class="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-(--ec-btn-bg) px-8 text-sm font-semibold text-(--ec-btn-text) transition-colors hover:bg-(--ec-btn-bg-hover) md:mt-16 min-[1200px]:mb-6.75"
        >View All</a>
      </section>
    </main>

    <!-- ================= FOOTER ================= -->
    <footer class="w-full bg-(--ec-footer-bg) text-white">
      <div class="mx-auto w-full max-w-378 px-4 pt-10 pb-6 sm:px-8 min-[1200px]:min-h-79.25 min-[1200px]:px-25.5 min-[1200px]:pt-14">
        <!-- FOOTER TOP CONTENT -->
        <div class="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <!-- LOGO AND DESCRIPTION -->
          <div class="max-w-80">
            <a href="/" class="inline-block">
              <img
                src="/Footer%20frame.png"
                alt="eCitizen"
                class="h-11 w-55.25 max-w-full object-contain object-left"
              />
            </a>

            <p class="mt-6 text-sm leading-6 text-gray-200 min-[1200px]:mt-8">
              Giving Kenyans easy access to automated<br class="hidden min-[1200px]:block" />
              services.
            </p>
          </div>

          <!-- FOOTER NAVIGATION -->
          <nav
            class="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium md:mt-10"
            aria-label="Footer"
          >
            <a href="/support" class="transition-colors hover:text-(--ec-green-text)">Help</a>
            <a href="/privacy" class="transition-colors hover:text-(--ec-green-text)">Privacy</a>
            <a href="/terms" class="transition-colors hover:text-(--ec-green-text)">Terms &amp; Conditions</a>
          </nav>
        </div>

        <!-- FOOTER BOTTOM CONTENT -->
        <div
          class="mt-10 flex flex-col gap-5 border-t border-white/15 pt-6 text-sm text-gray-200 sm:flex-row sm:items-center sm:justify-between min-[1200px]:mt-13.5 min-[1200px]:pt-7"
        >
          <p>© 2023 eCitizen. All rights reserved.</p>

          <!-- SOCIAL MEDIA ICONS -->
          <div class="flex items-center gap-6">
            <!-- TWITTER -->
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              class="text-white transition-opacity hover:opacity-70"
            >
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-.8-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.7-6.2 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
              </svg>
            </a>

            <!-- LINKEDIN -->
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="text-white transition-opacity hover:opacity-70"
            >
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zM3 9.75h4V21H3V9.75zm6.5 0h3.8v1.54h.06c.53-1 1.84-2.04 3.78-2.04 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.69V21h-4V9.75z" />
              </svg>
            </a>

            <!-- FACEBOOK -->
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="text-white transition-opacity hover:opacity-70"
            >
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8.2h2.8l.5-3.4h-3.3V8.3c0-1 .3-1.6 1.7-1.6H17V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.8H7.8v3.4h2.8V22h2.9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, watch } from 'vue'

/* ---------- THEME ---------- */
const THEME_KEY = 'ec-theme'
const theme = ref('light') // 'light' | 'dark'

// True only after the first paint, so the saved theme is applied instantly
// on load and only later switches are animated.
const ready = ref(false)

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

watch(theme, (value) => {
  applyTheme(value)
  try { localStorage.setItem(THEME_KEY, value) } catch (e) { /* ignore */ }
})

/* ---------- NAV STATE ---------- */
const apiOpen = ref(false)
const menuOpen = ref(false)

function onDocClick(e) {
  if (!e.target.closest('[data-menu]')) apiOpen.value = false
}
function onKey(e) {
  if (e.key === 'Escape') { apiOpen.value = false; menuOpen.value = false }
}
// Close the mobile menu if the window is resized up to the desktop layout
function onResize() {
  if (window.innerWidth >= 1200) menuOpen.value = false
}

onMounted(() => {
  let saved = null
  try { saved = localStorage.getItem(THEME_KEY) } catch (e) { /* storage blocked */ }
  theme.value =
    saved === 'dark' || saved === 'light'
      ? saved
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  applyTheme(theme.value)
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
  window.addEventListener('resize', onResize)

  // Enable the smooth theme transition only after the initial theme has painted
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ready.value = true
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

/* ---------- ACTIVE TABS ---------- */
const active = reactive({ auth: 1, pesa: 1 })

// pillClass(on, tone)
//   tone 'auth' -> Authorization API pills (active green #0A993D)
//   default     -> Pesaflow pills (active green #14B04C)
function pillClass(on, tone) {
  if (!on) return 'bg-(--ec-pill-bg) text-(--ec-pill-text) hover:bg-(--ec-surface)'
  return tone === 'auth'
    ? 'bg-(--ec-pill-on-bg-auth) text-(--ec-pill-on-text)'
    : 'bg-(--ec-pill-on-bg) text-(--ec-pill-on-text)'
}
</script>

<style>
/* ================= THEME TOKENS (light, default) ================= */

:root {
  --ec-bg: #ffffff;
  --ec-text: #1a1a1a;
  --ec-muted: #667085;
  --ec-surface: #f2f4f7;
  --ec-border: #e4e7ec;
  --ec-nav-text: #1f1f1f;
  --ec-nav-active: #5db872;
  --ec-green: #4fae72;
  --ec-green-strong: #439a63;
  --ec-green-text: #3f9a5f;
  --ec-search-bg: rgba(255, 255, 255, 0.7);
  --ec-search-border: #d6d6d6;
  --ec-search-icon: #9a9a9a;
  --ec-reg-bg: #15b76c;
  --ec-reg-bg-hover: #109a5a;
  --ec-reg-text: #ffffff;
  --ec-toggle-track: #e9e9e9;
  --ec-toggle-knob: #ffffff;
  --ec-toggle-icon: #8c8c8c;
  --ec-tab-bar: #e4e7ec;
  --ec-pill-bg: #f2f4f7;
  --ec-pill-text: #344054;
  --ec-pill-on-bg: #14b04c;
  --ec-pill-on-bg-auth: #0a993d;
  --ec-pill-on-text: #ffffff;
  --ec-chip-bg: #ffffff;
  --ec-chip-on-bg: #e3f5ea;
  --ec-chip-on-text: #15803d;
  --ec-chip-text: #222222;
  --ec-btn-bg: #14b04c;
  --ec-btn-bg-hover: #109a3e;
  --ec-btn-text: #ffffff;
  --ec-footer-bg: #090909;
  --ec-hero-1: rgba(4, 85, 33, 0.7);
  --ec-hero-2: #1e9034;
  --ec-hero-3: #7dcc70;
  --ec-hero-4: #a9bf36;
  --ec-hero-5: #db6900;
  --ec-glass-bg: rgba(255, 255, 255, 0.55);
  --ec-glass-border: rgba(0, 0, 0, 0.06);
  --ec-glass-inset: rgba(255, 255, 255, 0.7);
  --ec-glass-drop: rgba(16, 24, 40, 0.06);
  --ec-glow: rgba(34, 120, 70, 0);
  --ec-meets-1: #74b86a;
  --ec-meets-2: #98ca70;
  --ec-meets-3: #aebf46;
  --ec-meets-4: #b8a63e;
  --ec-meets-5: #c4852f;

  color-scheme: light;
}

/* ================= THEME TOKENS (dark) ================= */

:root[data-theme='dark'] {
  --ec-bg: #151515;
  --ec-text: #f2f2f2;
  --ec-muted: #a3a3a3;
  --ec-surface: #232323;
  --ec-border: #333333;
  --ec-nav-text: #f2f2f2;
  --ec-nav-active: #5ed06f;
  --ec-green: #62d67c;
  --ec-green-strong: #52c46c;
  --ec-green-text: #5ed06f;
  --ec-search-bg: rgba(35, 35, 35, 0.6);
  --ec-search-border: #3b3b3b;
  --ec-search-icon: #8a8a8a;
  --ec-reg-bg: #15b76c;
  --ec-reg-bg-hover: #109a5a;
  --ec-reg-text: #ffffff;
  --ec-toggle-track: #5a5a5a;
  --ec-toggle-knob: #3b3b3b;
  --ec-toggle-icon: #ffffff;
  --ec-tab-bar: #333333;
  --ec-pill-bg: #232323;
  --ec-pill-text: #cfcfcf;
  --ec-pill-on-bg: #14b04c;
  --ec-pill-on-bg-auth: #0a993d;
  --ec-pill-on-text: #ffffff;
  --ec-chip-bg: #232323;
  --ec-chip-on-bg: #1f3a29;
  --ec-chip-on-text: #7fe39a;
  --ec-chip-text: #cfcfcf;
  --ec-btn-bg: #14b04c;
  --ec-btn-bg-hover: #109a3e;
  --ec-btn-text: #ffffff;
  --ec-footer-bg: #0a0a0a;
  --ec-hero-1: rgba(4, 85, 33, 0.7);
  --ec-hero-2: #1e9034;
  --ec-hero-3: #7dcc70;
  --ec-hero-4: #a9bf36;
  --ec-hero-5: #db6900;
  --ec-glass-bg: rgba(28, 28, 28, 0.5);
  --ec-glass-border: rgba(255, 255, 255, 0.08);
  --ec-glass-inset: rgba(255, 255, 255, 0.08);
  --ec-glass-drop: rgba(0, 0, 0, 0.35);
  --ec-glow: rgba(34, 120, 70, 0.14);
  --ec-meets-1: #74b86a;
  --ec-meets-2: #98ca70;
  --ec-meets-3: #aebf46;
  --ec-meets-4: #b8a63e;
  --ec-meets-5: #c4852f;

  color-scheme: dark;
}

/* ================= PAGE BACKGROUND (plain, no page-wide glow) ================= */

html {
  min-height: 100%;
  background-color: var(--ec-bg);
}

.ec-root {
  min-height: 100vh;
  width: 100%;
  color: var(--ec-text);
  background-color: var(--ec-bg);
}

/* ================= SUBTLE GLOW BEHIND THE MASK LOGO ONLY ================= */

.ec-art-glow {
  background: radial-gradient(
    closest-side,
    var(--ec-glow) 0%,
    rgba(34, 120, 70, 0.05) 55%,
    transparent 100%
  );
  border-radius: 9999px;
}

/* ================= REGISTERED COLOUR PROPERTIES ================= */

@property --ec-bg { syntax: '<color>'; inherits: true; initial-value: #ffffff; }
@property --ec-text { syntax: '<color>'; inherits: true; initial-value: #1a1a1a; }
@property --ec-muted { syntax: '<color>'; inherits: true; initial-value: #667085; }
@property --ec-surface { syntax: '<color>'; inherits: true; initial-value: #f2f4f7; }
@property --ec-border { syntax: '<color>'; inherits: true; initial-value: #e4e7ec; }
@property --ec-nav-text { syntax: '<color>'; inherits: true; initial-value: #1f1f1f; }
@property --ec-nav-active { syntax: '<color>'; inherits: true; initial-value: #5db872; }
@property --ec-green { syntax: '<color>'; inherits: true; initial-value: #4fae72; }
@property --ec-green-strong { syntax: '<color>'; inherits: true; initial-value: #439a63; }
@property --ec-green-text { syntax: '<color>'; inherits: true; initial-value: #3f9a5f; }
@property --ec-search-bg { syntax: '<color>'; inherits: true; initial-value: rgba(255, 255, 255, 0.7); }
@property --ec-search-border { syntax: '<color>'; inherits: true; initial-value: #d6d6d6; }
@property --ec-search-icon { syntax: '<color>'; inherits: true; initial-value: #9a9a9a; }
@property --ec-reg-bg { syntax: '<color>'; inherits: true; initial-value: #15b76c; }
@property --ec-reg-bg-hover { syntax: '<color>'; inherits: true; initial-value: #109a5a; }
@property --ec-reg-text { syntax: '<color>'; inherits: true; initial-value: #ffffff; }
@property --ec-toggle-track { syntax: '<color>'; inherits: true; initial-value: #e9e9e9; }
@property --ec-toggle-knob { syntax: '<color>'; inherits: true; initial-value: #ffffff; }
@property --ec-toggle-icon { syntax: '<color>'; inherits: true; initial-value: #8c8c8c; }
@property --ec-tab-bar { syntax: '<color>'; inherits: true; initial-value: #e4e7ec; }
@property --ec-pill-bg { syntax: '<color>'; inherits: true; initial-value: #f2f4f7; }
@property --ec-pill-text { syntax: '<color>'; inherits: true; initial-value: #344054; }
@property --ec-pill-on-bg { syntax: '<color>'; inherits: true; initial-value: #14b04c; }
@property --ec-pill-on-bg-auth { syntax: '<color>'; inherits: true; initial-value: #0a993d; }
@property --ec-pill-on-text { syntax: '<color>'; inherits: true; initial-value: #ffffff; }
@property --ec-chip-bg { syntax: '<color>'; inherits: true; initial-value: #ffffff; }
@property --ec-chip-on-bg { syntax: '<color>'; inherits: true; initial-value: #e3f5ea; }
@property --ec-chip-on-text { syntax: '<color>'; inherits: true; initial-value: #15803d; }
@property --ec-chip-text { syntax: '<color>'; inherits: true; initial-value: #222222; }
@property --ec-btn-bg { syntax: '<color>'; inherits: true; initial-value: #14b04c; }
@property --ec-btn-bg-hover { syntax: '<color>'; inherits: true; initial-value: #109a3e; }
@property --ec-btn-text { syntax: '<color>'; inherits: true; initial-value: #ffffff; }
@property --ec-footer-bg { syntax: '<color>'; inherits: true; initial-value: #090909; }
@property --ec-hero-1 { syntax: '<color>'; inherits: true; initial-value: rgba(4, 85, 33, 0.7); }
@property --ec-hero-2 { syntax: '<color>'; inherits: true; initial-value: #1e9034; }
@property --ec-hero-3 { syntax: '<color>'; inherits: true; initial-value: #7dcc70; }
@property --ec-hero-4 { syntax: '<color>'; inherits: true; initial-value: #a9bf36; }
@property --ec-hero-5 { syntax: '<color>'; inherits: true; initial-value: #db6900; }
@property --ec-glass-bg { syntax: '<color>'; inherits: true; initial-value: rgba(255, 255, 255, 0.55); }
@property --ec-glass-border { syntax: '<color>'; inherits: true; initial-value: rgba(0, 0, 0, 0.06); }
@property --ec-glass-inset { syntax: '<color>'; inherits: true; initial-value: rgba(255, 255, 255, 0.7); }
@property --ec-glass-drop { syntax: '<color>'; inherits: true; initial-value: rgba(16, 24, 40, 0.06); }
@property --ec-glow { syntax: '<color>'; inherits: true; initial-value: rgba(34, 120, 70, 0); }
@property --ec-meets-1 { syntax: '<color>'; inherits: true; initial-value: #74b86a; }
@property --ec-meets-2 { syntax: '<color>'; inherits: true; initial-value: #98ca70; }
@property --ec-meets-3 { syntax: '<color>'; inherits: true; initial-value: #aebf46; }
@property --ec-meets-4 { syntax: '<color>'; inherits: true; initial-value: #b8a63e; }
@property --ec-meets-5 { syntax: '<color>'; inherits: true; initial-value: #c4852f; }

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