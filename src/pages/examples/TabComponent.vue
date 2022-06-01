<template>
	<page-layout>
		<h1>Tab component</h1>
		<section class="section">
			<card>
				<h3>Tabs</h3>
				<p class="lh125">
					<strong>props:</strong> variant (String: basic (default), flat, pills), full (bool), centered (bool), card (bool), horizontal (bool - works only with card)
				</p>
				<h3>Tab</h3>
				<p class="lh125">
					<strong>props:</strong> name (String), disabled (bool), icon (String)
				</p>
			</card>
		</section>
		<section class="section">
			<h2>Variant basic</h2>
			<h3>Card horizontal</h3>
			<tabs card horizontal>
				<tab icon="home" name="first">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, perspiciatis eius? Dolore cumque sint vel et. Vel magni illum explicabo ex minus voluptas eaque nihil impedit odio quam neque sed natus facilis, atque doloremque beatae tenetur officiis, dignissimos voluptate numquam vero dolorum reprehenderit quisquam corporis. Optio, ab exercitationem dolorum ipsa, dolor autem quas rerum consectetur, impedit omnis deleniti voluptate aliquam?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nemo eaque tempora incidunt laboriosam ipsam veritatis veniam labore. Adipisci at, quisquam numquam aut possimus voluptas! Tempore velit assumenda, veritatis blanditiis explicabo hic eum voluptas eaque neque distinctio ipsum facere? Hic voluptatem consequuntur magnam similique ipsum molestias architecto tempore explicabo! Dolorem excepturi provident iste laboriosam sunt quibusdam quia culpa vitae maxime obcaecati reiciendis, dolor, sequi dolores exercitationem cumque quasi magni, corrupti asperiores? Omnis corporis, aperiam fugit maxime praesentium quidem repellat numquam.</p>
				</tab>
				<tab name="second" disabled>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
				</tab>
				<tab name="Third">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
				</tab>
				<tab name="Fourth">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, perspiciatis eius? Dolore cumque sint vel et. Vel magni illum explicabo ex minus voluptas eaque nihil impedit odio quam neque sed natus facilis, atque doloremque beatae tenetur officiis, dignissimos voluptate numquam vero dolorum reprehenderit quisquam corporis. Optio, ab exercitationem dolorum ipsa, dolor autem quas rerum consectetur, impedit omnis deleniti voluptate aliquam?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nemo eaque tempora incidunt laboriosam ipsam veritatis veniam labore. Adipisci at, quisquam numquam aut possimus voluptas! Tempore velit assumenda, veritatis blanditiis explicabo hic eum voluptas eaque neque distinctio ipsum facere? Hic voluptatem consequuntur magnam similique ipsum molestias architecto tempore explicabo! Dolorem excepturi provident iste laboriosam sunt quibusdam quia culpa vitae maxime obcaecati reiciendis, dolor, sequi dolores exercitationem cumque quasi magni, corrupti asperiores? Omnis corporis, aperiam fugit maxime praesentium quidem repellat numquam.</p>
				</tab>
			</tabs>
			<h3>Card</h3>
			<tabs card>
				<tab icon="home" name="first">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
				</tab>
				<tab name="second" disabled>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
				</tab>
				<tab name="Third">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
				</tab>
				<tab name="Fourth">
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
				</tab>
			</tabs>
			<card title="Inside other component" titleTag="h3" subtitle="No card/horizontal props">
				<tabs>
					<tab icon="home" name="first">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
					</tab>
					<tab name="second" disabled>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
					</tab>
					<tab name="Third">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
					</tab>
					<tab name="Fourth">
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
					</tab>
				</tabs>
			</card>
		</section>
		<section class="section">
			<h2>Variant pills</h2>
			<h3>Card horizontal</h3>
			<tabs variant="pills" card horizontal>
				<tab icon="home" name="first">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, perspiciatis eius? Dolore cumque sint vel et. Vel magni illum explicabo ex minus voluptas eaque nihil impedit odio quam neque sed natus facilis, atque doloremque beatae tenetur officiis, dignissimos voluptate numquam vero dolorum reprehenderit quisquam corporis. Optio, ab exercitationem dolorum ipsa, dolor autem quas rerum consectetur, impedit omnis deleniti voluptate aliquam?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nemo eaque tempora incidunt laboriosam ipsam veritatis veniam labore. Adipisci at, quisquam numquam aut possimus voluptas! Tempore velit assumenda, veritatis blanditiis explicabo hic eum voluptas eaque neque distinctio ipsum facere? Hic voluptatem consequuntur magnam similique ipsum molestias architecto tempore explicabo! Dolorem excepturi provident iste laboriosam sunt quibusdam quia culpa vitae maxime obcaecati reiciendis, dolor, sequi dolores exercitationem cumque quasi magni, corrupti asperiores? Omnis corporis, aperiam fugit maxime praesentium quidem repellat numquam.</p>
				</tab>
				<tab name="second" disabled>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
				</tab>
				<tab name="Third">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
				</tab>
				<tab name="Fourth">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, perspiciatis eius? Dolore cumque sint vel et. Vel magni illum explicabo ex minus voluptas eaque nihil impedit odio quam neque sed natus facilis, atque doloremque beatae tenetur officiis, dignissimos voluptate numquam vero dolorum reprehenderit quisquam corporis. Optio, ab exercitationem dolorum ipsa, dolor autem quas rerum consectetur, impedit omnis deleniti voluptate aliquam?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nemo eaque tempora incidunt laboriosam ipsam veritatis veniam labore. Adipisci at, quisquam numquam aut possimus voluptas! Tempore velit assumenda, veritatis blanditiis explicabo hic eum voluptas eaque neque distinctio ipsum facere? Hic voluptatem consequuntur magnam similique ipsum molestias architecto tempore explicabo! Dolorem excepturi provident iste laboriosam sunt quibusdam quia culpa vitae maxime obcaecati reiciendis, dolor, sequi dolores exercitationem cumque quasi magni, corrupti asperiores? Omnis corporis, aperiam fugit maxime praesentium quidem repellat numquam.</p>
				</tab>
			</tabs>
			<h3>Card</h3>
			<tabs variant="pills" card>
				<tab icon="home" name="first">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
				</tab>
				<tab name="second" disabled>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
				</tab>
				<tab name="Third">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
				</tab>
				<tab name="Fourth">
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
				</tab>
			</tabs>
			<card title="Inside other component" titleTag="h3">
				<tabs variant="pills">
					<tab icon="home" name="first">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
					</tab>
					<tab name="second" disabled>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
					</tab>
					<tab name="Third">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
					</tab>
					<tab name="Fourth">
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
					</tab>
				</tabs>
			</card>
		</section>
		<section class="section">
			<h2>Variant flat</h2>
			<h3>Card horizontal</h3>
			<tabs variant="flat" card horizontal>
				<tab icon="home" name="first">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, perspiciatis eius? Dolore cumque sint vel et. Vel magni illum explicabo ex minus voluptas eaque nihil impedit odio quam neque sed natus facilis, atque doloremque beatae tenetur officiis, dignissimos voluptate numquam vero dolorum reprehenderit quisquam corporis. Optio, ab exercitationem dolorum ipsa, dolor autem quas rerum consectetur, impedit omnis deleniti voluptate aliquam?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nemo eaque tempora incidunt laboriosam ipsam veritatis veniam labore. Adipisci at, quisquam numquam aut possimus voluptas! Tempore velit assumenda, veritatis blanditiis explicabo hic eum voluptas eaque neque distinctio ipsum facere? Hic voluptatem consequuntur magnam similique ipsum molestias architecto tempore explicabo! Dolorem excepturi provident iste laboriosam sunt quibusdam quia culpa vitae maxime obcaecati reiciendis, dolor, sequi dolores exercitationem cumque quasi magni, corrupti asperiores? Omnis corporis, aperiam fugit maxime praesentium quidem repellat numquam.</p>
				</tab>
				<tab name="second" disabled>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
				</tab>
				<tab name="Third">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
				</tab>
				<tab name="Fourth">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, perspiciatis eius? Dolore cumque sint vel et. Vel magni illum explicabo ex minus voluptas eaque nihil impedit odio quam neque sed natus facilis, atque doloremque beatae tenetur officiis, dignissimos voluptate numquam vero dolorum reprehenderit quisquam corporis. Optio, ab exercitationem dolorum ipsa, dolor autem quas rerum consectetur, impedit omnis deleniti voluptate aliquam?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nemo eaque tempora incidunt laboriosam ipsam veritatis veniam labore. Adipisci at, quisquam numquam aut possimus voluptas! Tempore velit assumenda, veritatis blanditiis explicabo hic eum voluptas eaque neque distinctio ipsum facere? Hic voluptatem consequuntur magnam similique ipsum molestias architecto tempore explicabo! Dolorem excepturi provident iste laboriosam sunt quibusdam quia culpa vitae maxime obcaecati reiciendis, dolor, sequi dolores exercitationem cumque quasi magni, corrupti asperiores? Omnis corporis, aperiam fugit maxime praesentium quidem repellat numquam.</p>
				</tab>
			</tabs>
			<h3>Card</h3>
			<tabs variant="flat" card>
				<tab icon="home" name="first">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
				</tab>
				<tab name="second" disabled>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
				</tab>
				<tab name="Third">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
				</tab>
				<tab name="Fourth">
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
				</tab>
			</tabs>
			<card title="Inside other component" titleTag="h3">
				<tabs variant="flat">
					<tab icon="home" name="first">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
					</tab>
					<tab name="second" disabled>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
					</tab>
					<tab name="Third">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex. Mollitia amet exercitationem vel magnam voluptates quas unde, ut veniam!</p>
					</tab>
					<tab name="Fourth">
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum unde illo iusto nesciunt dignissimos saepe vitae ad delectus. Ab omnis eum iusto facilis? Non, tenetur odio sint voluptas ratione repudiandae sequi a deserunt rerum vel dolorum at amet et neque aut. Ipsum fugiat velit tempora assumenda corrupti numquam doloribus!</p>
					</tab>
				</tabs>
			</card>
		</section>
	</page-layout>
</template>

<script>
import Tabs from '../../components/Tabs.vue'
import Tab from '../../components/Tab.vue'
export default {
	components: {
		Tabs,
		Tab
	},
}
</script>