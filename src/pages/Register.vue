<template>
	<div class="full-page loginContVars">
		<div class="container-split">
			<div class="container-split-inner">
				<div class="cl-logo">LOGO</div>
				<h2>Create an account</h2>
				<text-input title="Username" icon="person" placeholder="myusername" />
				<text-input title="Email" icon="at" placeholder="my@email.com" />
				<text-input title="Password" icon="lock" type="password" placeholder="my-secret-password" />
				<text-input title="Repeat password" icon="lock" type="password" placeholder="my-secret-password" />
				<simple-checkbox-input><span>I agree to <a href="#">privacy policy</a> & <a href="#">terms</a></span></simple-checkbox-input>
				<p>
					<btn color="secondary" text="Sign up" full />
				</p>
				<p class="overline default-spacing">or</p>
				<p class="ta-c default-spacing lh125">
					Sign in by
				</p>
				<div class="huttons center">
					<btn class="social-login-btn" icon="facebook" tooltip="Facebook" />
					<btn class="social-login-btn" icon="google" tooltip="Google" />
					<btn class="social-login-btn" icon="twitter" tooltip="Twitter" />
				</div>
				<p class="ta-c">
					Already have an account? <a href="#login">Sign in instead</a>
				</p>
			</div>
		</div>
		<div class="wave-split">
			<svg viewBox="0 0 200 1440" xmlns="http://www.w3.org/2000/svg">
				<path fill="currentColor" fill-opacity="1" d="M -633.158 667.403 L -584.529 694.274 C -520.646 729.875 -441.158 774.842 -345.158 785.542 C -249.158 795.842 -153.158 753.842 -57.158 748.142 C 38.842 742.842 134.842 774.842 230.842 769.542 C 326.842 763.842 422.842 721.842 518.842 721.542 C 614.842 721.842 710.842 763.842 758.842 785.542 L 806.842 806.842 L 806.842 633.158 L 758.842 633.158 C 710.842 633.158 614.842 633.158 518.842 633.158 C 422.842 633.158 326.842 633.158 230.842 633.158 C 134.842 633.158 38.842 633.158 -57.158 633.158 C -153.158 633.158 -249.158 633.158 -345.158 633.158 C -441.158 633.158 -537.158 633.158 -585.158 633.158 L -633.158 633.158 L -633.158 667.403 Z" transform="matrix(0, -1, 1, 0, -633.15802, 806.84198)"/>
			</svg>
		</div>
	</div>
</template>

<script>
import SimpleCheckboxInput from '../components/inputs/SimpleCheckboxInput.vue'
import TextInput from '../components/inputs/TextInput.vue'
export default {
    components: { 
		TextInput,
		SimpleCheckboxInput 
	}
}
</script>