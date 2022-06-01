<template>
	<div class="appwrapper flex">
		<div class="sidebarOverlay l-hide" :class="{open: showSidebar}" @click="showSidebar = false">
		</div>
		<div class="sidebar flex flex-col" :class="{open: showSidebar}">
			<icon name="x" class="closeOverlayIcon l-hide" @click="showSidebar = false" />
			<div class="sidebarLogo">
				LOGO
			</div>
			<div class="scrolloverflow">
				<div class="sidebarMenu">
					<router-link href="#home" class="sideMnuLink" icon="home" title="Dashboard" />
					<router-link href="#widgets" class="sideMnuLink" icon="chat" title="Widgets" />
					<a class="sideMnuLink" href="#" @click.prevent="alert('faq')"><icon class="link-icon" name="help"/><span class="link-title">FAQ</span></a>
					<div class="sideMenuDivider"></div>
					<menu-group icon="info" title="Components" :links="['#alerts', '#inputs', '#modals', '#examples', '#tabs']">
						<router-link href="#alerts" class="sideMnuLink" title="Alerts & toasts" />
						<router-link href="#inputs" class="sideMnuLink" title="Form inputs" />
						<router-link href="#modals" class="sideMnuLink" title="Modals, loading overlay" />
						<router-link href="#tabs" class="sideMnuLink" title="Tabss" />
						<router-link href="#examples" class="sideMnuLink" title="Dropdown, buttons, etc..." />
					</menu-group>
					<menu-group icon="page" title="Pages" :links="['#forms']">
						<router-link href="#forms" class="sideMnuLink" title="Forms" />
						<router-link href="#login" class="sideMnuLink" title="Login" />
						<router-link href="#register" class="sideMnuLink" title="Register" />
						<router-link href="#asdfasf" class="sideMnuLink" title="404" />
					</menu-group>
					<div class="sideMenuDivider"></div>
					<a class="sideMnuLink" href="https://github.com/pa2lo/simpleui" target="_blank"><icon class="link-icon" name="github"/><span class="link-title">GitHub</span></a>
				</div>
			</div>
			<div class="sidebarDarkThemeCont mta">
				<switch-input title="Dark mode" class="reverse" :modelValue="darkMode" @update:modelValue="switchDarkMode" />
			</div>
		</div>
		<section class="mainSection flex flex-col">
			<header class="topbar flex ai-c">
				<a href="#" class="menuToggler l-hide" @click.prevent="showSidebar = true">
					<icon name="menu"/>
				</a>
				<div class="mobileLogo l-hide">Logo</div>
				<div class="headerAcc">
					<drop-down right immediateHide>
						<template #toggler>
							<a class="headerAccToggler">
								<icon class="headerAccTogglerIcon" name="person"/>
								<span class="headerAccTogglerName">{{ username }}</span>
								<icon class="chevron" name="chevron-down"/>
							</a>
						</template>
						<template #header>
							<div class="flex ai-c">
								<div class="headerAccImg">
									<img height="42" width="42" :src="getAvatarImg()">
								</div>
								<div class="headerAccText">
									<div class="headerAccTextName">{{ username }}</div>
									<div class="headerAccTextMail">{{ useremail }}</div>
								</div>
							</div>
						</template>
						<drop-down-link title="Edit profile" />
						<drop-down-link title="Logout"  @click.prevent="logout" />
					</drop-down>
				</div>
			</header>
			<div class="scrolloverflow">
				<main class="mainbody">
					<slot />
				</main>
			</div>
		</section>
		<notific />
		<modal-actions />
	</div>
</template>

<script>
import RouterLink from '../components/RouterLink.vue'
import MenuGroup from '../components/MenuGroup.vue'
import DropDown from '../components/DropDown.vue'
import DropDownLink from '../components/DropDownLink.vue'
import SwitchInput from '../components/inputs/SwitchInput.vue'

export default {
	components: {
		RouterLink,
		MenuGroup,
		DropDown,
		DropDownLink,
		SwitchInput
	},
	data() {
		return {
			username: 'Admin',
			useremail: 'admin@admin.admin',
			showSidebar: false,
			darkMode: this.$root.darkMode
		}
	},
	methods: {
		switchDarkMode(v) {
			this.$root.switchDarkMode(v)
		},
		getAvatarImg() {
			return `https://eu.ui-avatars.com/api/?name=${encodeURI(this.username)}&size=42&background=e0f2fb&color=0070BA&bold=true&rounded=true`
		},
		logout() {
			alert('Logout')
		},
		alert(text) {
			alert(text)
		}
	}
}
</script>