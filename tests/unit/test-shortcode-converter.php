<?php
/**
 * Unit tests for shortcake shortocode blocks to gutenberg blocks conversion.
 *
 * @package P4BKS
 */

use P4GBKS\Command\Shortcode_To_Gutenberg;

require_once __DIR__ . '/../p4-unittestcase.php';

/**
 * Class P4_ShortcodeConverterTest
 *
 * @package Planet4_Plugin_Blocks
 */
class P4_ShortcodeConverterTest extends P4_UnitTestCase {

	/**
	 * This method sets up the test.
	 */
	public function setUp() {
		parent::setUp();
		$this->converter = new Shortcode_To_Gutenberg();
		$this->converter->init();
	}

	/**
	 * Test that the block retrieves all the available Posts with 'press-release' as p4 page type.
	 *
	 * @param string $shortcode  Shortcake shortcode.
	 * @param string $expected   Expected converted to gutenberg block.
	 *
	 * @dataProvider carousel_header_shortcodes_provider
	 * @dataProvider columns_shortcodes_provider
	 * @dataProvider social_media_shortcodes_provider
	 * @dataProvider timeline_shortcodes_provider
	 * @dataProvider take_action_boxout_shortcodes_provider
	 */
	public function test_shortcodes_conversion( $shortcode, $expected ) {

		$converted = do_shortcode( $shortcode );

		$blocks = parse_blocks( $converted );
		$this->assertEquals( $expected, $converted );
		$this->assertCount( 1, $blocks );
	}

	// phpcs:disable
	/**
	 * Planet4 blocks shortocodes provider.
	 *
	 * @return array
	 */
	public function carousel_header_shortcodes_provider(): array {

		return [
			'carousel header 3 slides' =>
				[
					'[shortcake_carousel_header carousel_autoplay = "true" image_1 = "16" focus_image_1 = "center center" header_1 = "Carousel header - full width  1" description_1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique orci odio, ac dignissim nibh consequat id. Cras at mauris nibh. Morbi rutrum sodales urna in porta. Nunc placerat pretium nisl ac rhoncus. Proin sit amet arcu a justo gravida vulputate." link_text_1 = "Curabitur rutrum viverra" image_2 = "348" focus_image_2 = "center center" header_2 = "Carousel header - full width  2" description_2 = "Pellentesque cursus condimentum dolor vitae bibendum. Vivamus aliquam eget enim sit amet tincidunt. Fusce sagittis sagittis lacinia. Praesent nisl magna, finibus eget ipsum ultrices, feugiat mattis quam." link_text_2 = "Pellentesque cursus" image_3 = "357" focus_image_3 = "left top" header_3 = "Carousel header - full width  3" description_3 = "Nam condimentum sapien ut nunc eleifend scelerisque nec eget odio. Curabitur interdum efficitur magna at blandit. Donec congue massa id sem porta, eu iaculis dui pretium." focus_image_4 = "left top" /]',

					'<!-- wp:planet4-blocks/carousel-header {"carousel_autoplay":true,"slides":[{"image":16,"focal_points":{"x":0.5,"y":0.5},"header":"Carousel header - full width  1","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique orci odio, ac dignissim nibh consequat id. Cras at mauris nibh. Morbi rutrum sodales urna in porta. Nunc placerat pretium nisl ac rhoncus. Proin sit amet arcu a justo gravida vulputate.","link_text":"Curabitur rutrum viverra"},{"image":348,"focal_points":{"x":0.5,"y":0.5},"header":"Carousel header - full width  2","description":"Pellentesque cursus condimentum dolor vitae bibendum. Vivamus aliquam eget enim sit amet tincidunt. Fusce sagittis sagittis lacinia. Praesent nisl magna, finibus eget ipsum ultrices, feugiat mattis quam.","link_text":"Pellentesque cursus"},{"image":357,"focal_points":{"x":0,"y":0},"header":"Carousel header - full width  3","description":"Nam condimentum sapien ut nunc eleifend scelerisque nec eget odio. Curabitur interdum efficitur magna at blandit. Donec congue massa id sem porta, eu iaculis dui pretium."}]} /-->'
				],

			'carousel header 2 slides' =>
				[
					'[shortcake_carousel_header image_1="16" focus_image_1="center center" header_1="Lorem Ipsum" subheader_1="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit" description_1="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link_text_1="Curabitur rutrum viverra" image_2="348" focus_image_2="center center" header_2="Cras faucibus ac erat ac auctor" subheader_2="Integer vehicula magna in ante bibendum auctor" description_2="Pellentesque cursus condimentum dolor vitae bibendum. Vivamus aliquam eget enim sit amet tincidunt. Fusce sagittis sagittis lacinia." link_text_2="Pellentesque cursus" focus_image_3="left top" focus_image_4="left top" /]',

					'<!-- wp:planet4-blocks/carousel-header {"slides":[{"image":16,"focal_points":{"x":0.5,"y":0.5},"header":"Lorem Ipsum","subheader":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","link_text":"Curabitur rutrum viverra"},{"image":348,"focal_points":{"x":0.5,"y":0.5},"header":"Cras faucibus ac erat ac auctor","subheader":"Integer vehicula magna in ante bibendum auctor","description":"Pellentesque cursus condimentum dolor vitae bibendum. Vivamus aliquam eget enim sit amet tincidunt. Fusce sagittis sagittis lacinia.","link_text":"Pellentesque cursus"}]} /-->'
				],

			'carousel header 1 slide with invalid 2,3,4 attributes' =>
				[
					'[shortcake_carousel_header image_1="22156" focus_image_1="center bottom" header_1="Wat doet Greenpeace zelf?" header_size_1="h1" description_1="Wij werken al jaren intensief samen met de lokale bevolking in de Amazone. Ook hebben we nauwe banden met milieuorganisaties in de regio om onze slagkracht zo groot mogelijk te maken." link_url_new_tab_1="false" focus_image_2="left top" header_size_2="h1" link_url_new_tab_2="false" focus_image_3="left top" header_size_3="h1" link_url_new_tab_3="false" focus_image_4="left top" header_size_4="h1" link_url_new_tab_4="false" /]',

					'<!-- wp:planet4-blocks/carousel-header {"slides":[{"image":22156,"focal_points":{"x":0.5,"y":1},"header":"Wat doet Greenpeace zelf?","header_size":"h1","description":"Wij werken al jaren intensief samen met de lokale bevolking in de Amazone. Ook hebben we nauwe banden met milieuorganisaties in de regio om onze slagkracht zo groot mogelijk te maken.","link_url_new_tab":false}]} /-->'
				],

			'carousel header 3 slides with invalid 4th attributes' =>
				[
					'[shortcake_carousel_header image_1="20122" focus_image_1="center center" header_1="Wist je dat..." header_size_1="h1" description_1="...wij de natuur opeten? 80% van de ontbossing wordt veroorzaakt door de industriële landbouw. Met name voor de productie van vlees, soja voor veevoer, palmolie en cacao." link_text_1="Ja, ik teken!" link_url_1="#petitie" link_url_new_tab_1="false" image_2="23797" focus_image_2="center top" header_2="Wist je dat..." header_size_2="h1" description_2="… de natuur ons gratis diensten levert? Schone lucht, drinkwater en bestuiving voor ons voedsel. En niet onbelangrijk, natuur draagt bij aan innerlijke rust." link_text_2="Ja. ik teken!" link_url_2="https://www.greenpeace.org/nl/acties/bossenwet/#petitie" link_url_new_tab_2="false" image_3="23798" focus_image_3="left bottom" header_3="Wist je dat..." header_size_3="h1" description_3="… 1 miljoen plant- en diersoorten dreigen uit te sterven. Dat is 1 op de 8 van alle soorten." link_text_3="Ja. ik teken!" link_url_3="https://www.greenpeace.org/nl/acties/bossenwet/#petitie" link_url_new_tab_3="false" focus_image_4="left top" header_size_4="h1" link_url_new_tab_4="false" /]',

					'<!-- wp:planet4-blocks/carousel-header {"slides":[{"image":20122,"focal_points":{"x":0.5,"y":0.5},"header":"Wist je dat...","header_size":"h1","description":"...wij de natuur opeten? 80% van de ontbossing wordt veroorzaakt door de industri\u00eble landbouw. Met name voor de productie van vlees, soja voor veevoer, palmolie en cacao.","link_text":"Ja, ik teken!","link_url":"#petitie","link_url_new_tab":false},{"image":23797,"focal_points":{"x":0.5,"y":0},"header":"Wist je dat...","header_size":"h1","description":"\u2026 de natuur ons gratis diensten levert? Schone lucht, drinkwater en bestuiving voor ons voedsel. En niet onbelangrijk, natuur draagt bij aan innerlijke rust.","link_text":"Ja. ik teken!","link_url":"https://www.greenpeace.org/nl/acties/bossenwet/#petitie","link_url_new_tab":false},{"image":23798,"focal_points":{"x":0,"y":1},"header":"Wist je dat...","header_size":"h1","description":"\u2026 1 miljoen plant- en diersoorten dreigen uit te sterven. Dat is 1 op de 8 van alle soorten.","link_text":"Ja. ik teken!","link_url":"https://www.greenpeace.org/nl/acties/bossenwet/#petitie","link_url_new_tab":false}]} /-->'
				],

			'carousel header 4 slides' =>
				[
					'[shortcake_carousel_header carousel_autoplay="true" image_1="19059" focus_image_1="center top" header_1="Attentie, attentie" subheader_1="dit is een klimaatcrisis." description_1="Klimaatverandering is geen sciencefictionverhaal meer, het is aan de orde van de dag. Oogsten mislukken, complete eilanden dreigen te verdwijnen en extreem weer hangt steeds vaker in de lucht." link_text_1="Teken nu de petitie!" link_url_1="#petitie" image_2="19073" focus_image_2="left top" header_2="Attentie, attentie" description_2="Klimaatverandering is geen sciencefictionverhaal meer, het is aan de orde van de dag. Oogsten mislukken, complete eilanden dreigen te verdwijnen en extreem weer hangt steeds vaker in de lucht." link_text_2="Teken nu de petitie!" link_url_2="#petitie" image_3="19068" focus_image_3="left top" header_3="Attentie, attentie" description_3="Klimaatverandering is geen sciencefictionverhaal meer, het is aan de orde van de dag. Oogsten mislukken, complete eilanden dreigen te verdwijnen en extreem weer hangt steeds vaker in de lucht." link_text_3="Teken nu de petitie!" link_url_3="#petitie" image_4="19074" focus_image_4="left top" header_4="Attentie, attentie" description_4="Klimaatverandering is geen sciencefictionverhaal meer, het is aan de orde van de dag. Oogsten mislukken, complete eilanden dreigen te verdwijnen en extreem weer hangt steeds vaker in de lucht." link_text_4="Teken nu de petitie!" link_url_4="#petitie" /]',

					'<!-- wp:planet4-blocks/carousel-header {"carousel_autoplay":true,"slides":[{"image":19059,"focal_points":{"x":0.5,"y":0},"header":"Attentie, attentie","subheader":"dit is een klimaatcrisis.","description":"Klimaatverandering is geen sciencefictionverhaal meer, het is aan de orde van de dag. Oogsten mislukken, complete eilanden dreigen te verdwijnen en extreem weer hangt steeds vaker in de lucht.","link_text":"Teken nu de petitie!","link_url":"#petitie"},{"image":19073,"focal_points":{"x":0,"y":0},"header":"Attentie, attentie","description":"Klimaatverandering is geen sciencefictionverhaal meer, het is aan de orde van de dag. Oogsten mislukken, complete eilanden dreigen te verdwijnen en extreem weer hangt steeds vaker in de lucht.","link_text":"Teken nu de petitie!","link_url":"#petitie"},{"image":19068,"focal_points":{"x":0,"y":0},"header":"Attentie, attentie","description":"Klimaatverandering is geen sciencefictionverhaal meer, het is aan de orde van de dag. Oogsten mislukken, complete eilanden dreigen te verdwijnen en extreem weer hangt steeds vaker in de lucht.","link_text":"Teken nu de petitie!","link_url":"#petitie"},{"image":19074,"focal_points":{"x":0,"y":0},"header":"Attentie, attentie","description":"Klimaatverandering is geen sciencefictionverhaal meer, het is aan de orde van de dag. Oogsten mislukken, complete eilanden dreigen te verdwijnen en extreem weer hangt steeds vaker in de lucht.","link_text":"Teken nu de petitie!","link_url":"#petitie"}]} /-->'
				],

			'carousel header 2 slides with custom urls' =>
				[
					'[shortcake_carousel_header image_1="2492" focus_image_1="center center" header_1="O que os olhos veem, a natureza sente" subheader_1="Ano: 2018 / Agência: Y&R" description_1="Formato: meia página" link_text_1="Baixe as peças aqui" link_url_1="https://drive.google.com/drive/folders/1wg6Ljzbx1WPHPpjnWAt3Xh4ub2wYVSiF?usp=sharing" image_2="2498" focus_image_2="center center" header_2="O que os olhos veem, a natureza sente" subheader_2="Ano: 2018 / Agência: Y&R" description_2="Formato: página inteira" link_text_2="Baixe aqui as peças" link_url_2="https://drive.google.com/drive/folders/16kGY9q56kCpu4WxKNo2eNb0_CDefKE8n?usp=sharing" focus_image_3="left top" focus_image_4="left top" /]',

					'<!-- wp:planet4-blocks/carousel-header {"slides":[{"image":2492,"focal_points":{"x":0.5,"y":0.5},"header":"O que os olhos veem, a natureza sente","subheader":"Ano: 2018 / Ag\u00eancia: Y&R","description":"Formato: meia p\u00e1gina","link_text":"Baixe as pe\u00e7as aqui","link_url":"https://drive.google.com/drive/folders/1wg6Ljzbx1WPHPpjnWAt3Xh4ub2wYVSiF?usp=sharing"},{"image":2498,"focal_points":{"x":0.5,"y":0.5},"header":"O que os olhos veem, a natureza sente","subheader":"Ano: 2018 / Ag\u00eancia: Y&R","description":"Formato: p\u00e1gina inteira","link_text":"Baixe aqui as pe\u00e7as","link_url":"https://drive.google.com/drive/folders/16kGY9q56kCpu4WxKNo2eNb0_CDefKE8n?usp=sharing"}]} /-->'
				],
		];
	}

	/**
	 * Planet4 blocks shortocodes provider.
	 *
	 * @return array
	 */
	public function columns_shortcodes_provider(): array {
		return [

			// 1-5
			'columns 2_columns' =>
				[
					'[shortcake_columns columns_block_style="no_image" title_1="People Power" description_1="This is where you come in. If you want a green and just world, we’ll march alongside you. If you’ve got ideas for how to get there, we want to learn from you. Let’s dream together, plan together and act together." link_1="/act/" cta_text_1="Be the change" title_2="Change the world" description_2="Imagine a world where forests flourish and oceans are full of life. Where energy is as clean as a mountain stream. Where everyone has security, dignity and joy. We can’t build this future alone, but we can build it together." link_2="/explore/" cta_text_2="Discover our stories" /]',

					'<!-- wp:planet4-blocks/columns {"columns_block_style":"no_image","columns":[{"title":"People Power","description":"This is where you come in. If you want a green and just world, we\u2019ll march alongside you. If you\u2019ve got ideas for how to get there, we want to learn from you. Let\u2019s dream together, plan together and act together.","cta_link":"/act/","cta_text":"Be the change"},{"title":"Change the world","description":"Imagine a world where forests flourish and oceans are full of life. Where energy is as clean as a mountain stream. Where everyone has security, dignity and joy. We can\u2019t build this future alone, but we can build it together.","cta_link":"/explore/","cta_text":"Discover our stories"}]} /-->',
				],

			'columns 3 columns with unnesseary 4th column attribute' =>
				[
					'[shortcake_columns columns_block_style="tasks" columns_title="What you can do (Column block - Tasks)" columns_description="More than ever, the world needs to realise the importance of protecting the Congo Basin Forest." title_1="Send a wish" description_1="More than ever, the world needs to realise the importance of protecting the Congo Basin Forest." attachment_1="348" link_1="www.google.com" link_new_tab_1="false" cta_text_1="Add your wish" title_2="Dance for the Congo" description_2="Post a video of your Congo Selfie Sway on your Facebook feed with the hashtag #DanceForTheCongo" attachment_2="87" link_2="www.facebook.com" link_new_tab_2="false" cta_text_2="Post your video" title_3="Show the world" description_3="Share this spectacular video to show the world why we need to look after the Congo Basin Forest." attachment_3="86" link_3="www.youtube.com" link_new_tab_3="false" cta_text_3="Share your video" link_new_tab_4="false" /]',

					'<!-- wp:planet4-blocks/columns {"columns_block_style":"tasks","columns_title":"What you can do (Column block - Tasks)","columns_description":"More than ever, the world needs to realise the importance of protecting the Congo Basin Forest.","columns":[{"title":"Send a wish","description":"More than ever, the world needs to realise the importance of protecting the Congo Basin Forest.","attachment":348,"cta_link":"www.google.com","link_new_tab":false,"cta_text":"Add your wish"},{"title":"Dance for the Congo","description":"Post a video of your Congo Selfie Sway on your Facebook feed with the hashtag #DanceForTheCongo","attachment":87,"cta_link":"www.facebook.com","link_new_tab":false,"cta_text":"Post your video"},{"title":"Show the world","description":"Share this spectacular video to show the world why we need to look after the Congo Basin Forest.","attachment":86,"cta_link":"www.youtube.com","link_new_tab":false,"cta_text":"Share your video"}]} /-->',
				],

			'columns 4 columns' =>
				[
					'[shortcake_columns columns_block_style="tasks" columns_title="How you can help" columns_description="More than 3 million people around the world have joined Greenpeace to urge companies to stop polluting our planet with throwaway plastic. And it’s working. Because of mounting pressure from people like you, corporations are finally starting to admit that they are part of the problem, and they are talking about solutions. But we don’t need more talking—we need concrete, urgent action to stop plastic pollution at the source!" title_1="Tell Nestlé to stop producing single-use plastic" description_1="Nestlé must stop endangering our oceans, our waterways, our communities, and wildlife around the world." link_1="https://act.greenpeace.org/page/40248/action/1" cta_text_1="Email Nestlé’s CEO" title_2="Spread the word" description_2="What\'s the real cause of plastic pollution? Out-of-control production of throwaway plastic by the world’s biggest brands." link_2="https://release.k8s.p4.greenpeace.org/international/story/21107/why-im-joining-the-greenpeace-ships-to-fight-plastic-pollution/" cta_text_2="Find out more" title_3="Make a Plastic Monster" description_3="Join the global movement to expose single-use plastic and packaging for the monster it is. Together we will pressure these companies to take concrete, urgent action to slay the plastic monster they have created." link_3="https://storage.googleapis.com/planet4-handbook-stateless/2019/02/78935b2a-plasticmonster.pdf" cta_text_3="Get creative!" title_4="Other ways to take action" description_4="Check out Greenpeace\'s Million Acts of Blue toolkit for a plastic-free future. There are so many ways you can take action to help stop plastic pollution at the source!" link_4="https://release.k8s.p4.greenpeace.org/international/act/million-acts-of-blue/" cta_text_4="Check out the toolkit" /]',

					'<!-- wp:planet4-blocks/columns {"columns_block_style":"tasks","columns_title":"How you can help","columns_description":"More than 3 million people around the world have joined Greenpeace to urge companies to stop polluting our planet with throwaway plastic. And it\u2019s working. Because of mounting pressure from people like you, corporations are finally starting to admit that they are part of the problem, and they are talking about solutions. But we don\u2019t need more talking\u2014we need concrete, urgent action to stop plastic pollution at the source!","columns":[{"title":"Tell Nestl\u00e9 to stop producing single-use plastic","description":"Nestl\u00e9 must stop endangering our oceans, our waterways, our communities, and wildlife around the world.","cta_link":"https://act.greenpeace.org/page/40248/action/1","cta_text":"Email Nestl\u00e9\u2019s CEO"},{"title":"Spread the word","description":"What\'s the real cause of plastic pollution? Out-of-control production of throwaway plastic by the world\u2019s biggest brands.","cta_link":"https://release.k8s.p4.greenpeace.org/international/story/21107/why-im-joining-the-greenpeace-ships-to-fight-plastic-pollution/","cta_text":"Find out more"},{"title":"Make a Plastic Monster","description":"Join the global movement to expose single-use plastic and packaging for the monster it is. Together we will pressure these companies to take concrete, urgent action to slay the plastic monster they have created.","cta_link":"https://storage.googleapis.com/planet4-handbook-stateless/2019/02/78935b2a-plasticmonster.pdf","cta_text":"Get creative!"},{"title":"Other ways to take action","description":"Check out Greenpeace\'s Million Acts of Blue toolkit for a plastic-free future. There are so many ways you can take action to help stop plastic pollution at the source!","cta_link":"https://release.k8s.p4.greenpeace.org/international/act/million-acts-of-blue/","cta_text":"Check out the toolkit"}]} /-->',
				],

			'columns 2 columns with urls' =>
				[
					'[shortcake_columns title_1="Get 5-10 friends to sign" description_1="We are building a movement to stop climate change and create a million good jobs in the process. You can help create it from the ground up.
<b>Duration: 10min</b>" link_1="mailto:?body=Hi,%0A%0AYou%20and%20I%20know%20we%E2%80%99re%20living%20through%20a%20climate%20emergency.%20Canada%20is%20warming%20twice%20as%20fast%20as%20the%20rest%20of%20the%20world.%20Ontario,%20Quebec%20and%20New-Brunswick%20were%20underwater%20this%20spring%20and%20raging%20wildfires%20are%20still%20threatening%20Ontario%20and%20Alberta.%20%0A%0ASo%20what%20can%20you%20do%20about%20it%20?%20You%20can%20ask%20your%20MP%20to%20endorse%20a%20Green%20New%20Deal,%20which%20is%20a%20plan%20for%20rapid,%20inclusive%20and%20far-reaching%20transition%20to%20slash%20emissions,%20protect%20life%20on%20Earth%20and%20create%20over%20a%20million%20good%20jobs%20in%20the%20process.%20%0A%0AWill%20you%20add%20your%20name%20for%20a%20Green%20New%20Deal%20?%20%0Ahttps%3A//act.gp/2LafrFI%0A%0AWhen%20politicians%20feel%20an%20emergency,%20rapid%20changes%20happen.%20Banks%20are%20saved,%20companies%20are%20bailed%20out.%20And%20climate%20solutions%20already%20exist.%20All%20it%20takes%20is%20the%20leadership%20to%20implement%20them.%20%0A%0AIf%20enough%20people%20join%20in%20you%20and%20I%20%20can%20move%20our%20political%20leaders,%20from%20all%20political%20parties%20to%20act%20now.%0A%0AAll%20around%20the%20world,%20people%20are%20waking%20up,%20and%20governments%20are%20following.%20Canada%20needs%20to%20do%20the%20same.%20You%20have%20the%20opportunity%20of%20a%20lifetime%3A%20you%20can%20participate%20in%20building%20a%20greener,%20fairer%20world%20for%20all%20of%20us.%0A%0AHere%20again,%20the%20link%20to%20ask%20your%20MP%20to%20endorse%20a%20Green%20New%20Deal%3A%20https%3A//act.gp/2LafrFI%0A%0AThanks&subject=Write%20to%20your%20MP%20and%20ask%20him/her/them%20to%20sign%20the%20Pact%20for%20a%20Green%20New%20Deal" cta_text_1="Forward this email" title_2="Unlock the power of your social network" description_2="Together, let’s make the Green New Deal go viral. Let’s make it the common-sense and necessary solution to our multiple climate crises. Talk to your friends.
<b>Duration: 3min</b>" link_2="https://api.whatsapp.com/send?text=Hi,%20how%20are%20you%20?%20I%20am%20writing%20to%20you%20because%20I%20just%20emailed%20my%20MP%20asking%20him/her/them%20to%20endorse%20a%20Green%20New%20Deal%20in%20Canada.%20This%20summer,%20from%20raging%20wildfires%20in%20Alberta%20to%20heat%20records%20in%20the%20Arctic,%20there%20are%20plenty%20of%20examples%20to%20prove%20how%20Canada%20is%20affected%20by%20the%20climate%20crisis.%20We%20must%20act%20now.%20Are%20you%20willing%20to%20help?%20You%20can%20email%20your%20MP%20%E2%80%93%20it%20only%20takes%20a%20few%20minutes%20%E2%80%93%20and%20ask%20him/her/them%20to%20take%20action.%20Click%20here%20%3E%3E%20https%3A//act.gp/2Li2WbB" cta_text_2="Share on WhatsApp" title_3="Harness the power of your online network" description_3="We won’t stop until it’s a reality. Your involvement can mark a turning point.
<b>Duration: 3min</b>" link_3="https://www.facebook.com/sharer/sharer.php?u=https%3A//act.gp/2JtETmw" cta_text_3="Share on Facebook" /]',

					'<!-- wp:planet4-blocks/columns {"columns":[{"title":"Get 5-10 friends to sign","description":"We are building a movement to stop climate change and create a million good jobs in the process. You can help create it from the ground up.\n<b>Duration: 10min</b>","cta_link":"mailto:?body=Hi,%0A%0AYou%20and%20I%20know%20we%E2%80%99re%20living%20through%20a%20climate%20emergency.%20Canada%20is%20warming%20twice%20as%20fast%20as%20the%20rest%20of%20the%20world.%20Ontario,%20Quebec%20and%20New-Brunswick%20were%20underwater%20this%20spring%20and%20raging%20wildfires%20are%20still%20threatening%20Ontario%20and%20Alberta.%20%0A%0ASo%20what%20can%20you%20do%20about%20it%20?%20You%20can%20ask%20your%20MP%20to%20endorse%20a%20Green%20New%20Deal,%20which%20is%20a%20plan%20for%20rapid,%20inclusive%20and%20far-reaching%20transition%20to%20slash%20emissions,%20protect%20life%20on%20Earth%20and%20create%20over%20a%20million%20good%20jobs%20in%20the%20process.%20%0A%0AWill%20you%20add%20your%20name%20for%20a%20Green%20New%20Deal%20?%20%0Ahttps%3A//act.gp/2LafrFI%0A%0AWhen%20politicians%20feel%20an%20emergency,%20rapid%20changes%20happen.%20Banks%20are%20saved,%20companies%20are%20bailed%20out.%20And%20climate%20solutions%20already%20exist.%20All%20it%20takes%20is%20the%20leadership%20to%20implement%20them.%20%0A%0AIf%20enough%20people%20join%20in%20you%20and%20I%20%20can%20move%20our%20political%20leaders,%20from%20all%20political%20parties%20to%20act%20now.%0A%0AAll%20around%20the%20world,%20people%20are%20waking%20up,%20and%20governments%20are%20following.%20Canada%20needs%20to%20do%20the%20same.%20You%20have%20the%20opportunity%20of%20a%20lifetime%3A%20you%20can%20participate%20in%20building%20a%20greener,%20fairer%20world%20for%20all%20of%20us.%0A%0AHere%20again,%20the%20link%20to%20ask%20your%20MP%20to%20endorse%20a%20Green%20New%20Deal%3A%20https%3A//act.gp/2LafrFI%0A%0AThanks&subject=Write%20to%20your%20MP%20and%20ask%20him/her/them%20to%20sign%20the%20Pact%20for%20a%20Green%20New%20Deal","cta_text":"Forward this email"},{"title":"Unlock the power of your social network","description":"Together, let\u2019s make the Green New Deal go viral. Let\u2019s make it the common-sense and necessary solution to our multiple climate crises. Talk to your friends.\n<b>Duration: 3min</b>","cta_link":"https://api.whatsapp.com/send?text=Hi,%20how%20are%20you%20?%20I%20am%20writing%20to%20you%20because%20I%20just%20emailed%20my%20MP%20asking%20him/her/them%20to%20endorse%20a%20Green%20New%20Deal%20in%20Canada.%20This%20summer,%20from%20raging%20wildfires%20in%20Alberta%20to%20heat%20records%20in%20the%20Arctic,%20there%20are%20plenty%20of%20examples%20to%20prove%20how%20Canada%20is%20affected%20by%20the%20climate%20crisis.%20We%20must%20act%20now.%20Are%20you%20willing%20to%20help?%20You%20can%20email%20your%20MP%20%E2%80%93%20it%20only%20takes%20a%20few%20minutes%20%E2%80%93%20and%20ask%20him/her/them%20to%20take%20action.%20Click%20here%20%3E%3E%20https%3A//act.gp/2Li2WbB","cta_text":"Share on WhatsApp"},{"title":"Harness the power of your online network","description":"We won\u2019t stop until it\u2019s a reality. Your involvement can mark a turning point.\n<b>Duration: 3min</b>","cta_link":"https://www.facebook.com/sharer/sharer.php?u=https%3A//act.gp/2JtETmw","cta_text":"Share on Facebook"}]} /-->',
				],

			'columns 2 columns with urls2' =>
				[
					'[shortcake_columns columns_block_style="no_image" title_1="A network of engaged organizations" description_1="Whatever organizations you’re involved with — your school, neighbourhood association, sports team or cooking class — get all the amazing people you know to endorse a Green New Deal!
<b>Duration: 15min</b>" link_1="https://docs.google.com/forms/d/e/1FAIpQLSeyDygwygTyeFn_UqNDSozHyCsbDrQKCftlF-341DtE-IowUg/viewform" cta_text_1="Sign up an organization" title_2="Get creative" description_2="Craft your own social media content using the images below and share them with this shortlink <b>act.gp/toolkitimages</b>.
<b>Duration: 15min</b>" link_2="https://storage.googleapis.com/planet4-canada-stateless/2019/07/from-the-ground-up-EN.zip" cta_text_2="Download design files" title_3="Get social" description_3="Barbecues and other summer time events are the perfect occasion to engage friends and family about exciting climate solutions that make life better today (like zero waste ideas)! Gather in a park and get people to sign a Green New Deal on your phone right now. Use this link : <b>act.gp/greennewdeal</b>
<b>Duration: 15min</b>" link_3="https://act.gp/greennewdeal" cta_text_3="Click here" /]',

					'<!-- wp:planet4-blocks/columns {"columns_block_style":"no_image","columns":[{"title":"A network of engaged organizations","description":"Whatever organizations you\u2019re involved with \u2014 your school, neighbourhood association, sports team or cooking class \u2014 get all the amazing people you know to endorse a Green New Deal!\n<b>Duration: 15min</b>","cta_link":"https://docs.google.com/forms/d/e/1FAIpQLSeyDygwygTyeFn_UqNDSozHyCsbDrQKCftlF-341DtE-IowUg/viewform","cta_text":"Sign up an organization"},{"title":"Get creative","description":"Craft your own social media content using the images below and share them with this shortlink <b>act.gp/toolkitimages</b>.\n<b>Duration: 15min</b>","cta_link":"https://storage.googleapis.com/planet4-canada-stateless/2019/07/from-the-ground-up-EN.zip","cta_text":"Download design files"},{"title":"Get social","description":"Barbecues and other summer time events are the perfect occasion to engage friends and family about exciting climate solutions that make life better today (like zero waste ideas)! Gather in a park and get people to sign a Green New Deal on your phone right now. Use this link : <b>act.gp/greennewdeal</b>\n<b>Duration: 15min</b>","cta_link":"https://act.gp/greennewdeal","cta_text":"Click here"}]} /-->',
				],

			'columns 2 columns icons' =>
				[
					'[shortcake_columns columns_block_style="icons" columns_title="Greenpeace Canada Board of Directors" attachment_1="1995" title_1="Anna Crawford, Co-Chair" description_1="Anna is a glaciologist who completed her PhD at Carleton University in 2018. She is now a postdoctoral research fellow at the University of St Andrews, Scotland where she is investigating the retreat of Antarctic glacier systems that will have significant implications for future sea level rise. Anna joined the board in 2015 after leading volunteer campaigns and local groups in Thunder Bay and Ottawa-Gatineau. " attachment_2="1993" title_2="Brigid Rowan, Co-Chair" description_2="Brigid Rowan is an energy economist with over 20 years of experience in the areas of energy and regulatory economics. She has co-authored reports and expert testimony on the most controversial oil projects in North America, including an influential and widely publicized study on the employment impacts of the Keystone XL pipeline." /]',

					'<!-- wp:planet4-blocks/columns {"columns_block_style":"icons","columns_title":"Greenpeace Canada Board of Directors","columns":[{"attachment":1995,"title":"Anna Crawford, Co-Chair","description":"Anna is a glaciologist who completed her PhD at Carleton University in 2018. She is now a postdoctoral research fellow at the University of St Andrews, Scotland where she is investigating the retreat of Antarctic glacier systems that will have significant implications for future sea level rise. Anna joined the board in 2015 after leading volunteer campaigns and local groups in Thunder Bay and Ottawa-Gatineau. "},{"attachment":1993,"title":"Brigid Rowan, Co-Chair","description":"Brigid Rowan is an energy economist with over 20 years of experience in the areas of energy and regulatory economics. She has co-authored reports and expert testimony on the most controversial oil projects in North America, including an influential and widely publicized study on the employment impacts of the Keystone XL pipeline."}]} /-->',
				],

			'columns 1 column icons invalid attributes' =>
				[
					'[shortcake_columns columns_block_style="icons" title_1="Ginger Gosnell-Myers, Board Member" description_1="Ginger, of Nisga’a and Kwakwaka’wakw heritage, is currently the City of Vancouver’s Aboriginal Relations manager whose role is in managing the emerging understandings between First Nations communities and Vancouver’s more recent inhabitants. Ginger’s ultimate goal is to advance reconciliation and promote understanding of Vancouver as unceded territory." attachment_1="1989" link_new_tab_1="false" link_new_tab_2="false" link_new_tab_3="false" link_new_tab_4="false" /]',

					'<!-- wp:planet4-blocks/columns {"columns_block_style":"icons","columns":[{"title":"Ginger Gosnell-Myers, Board Member","description":"Ginger, of Nisga\u2019a and Kwakwaka\u2019wakw heritage, is currently the City of Vancouver\u2019s Aboriginal Relations manager whose role is in managing the emerging understandings between First Nations communities and Vancouver\u2019s more recent inhabitants. Ginger\u2019s ultimate goal is to advance reconciliation and promote understanding of Vancouver as unceded territory.","attachment":1989,"link_new_tab":false}]} /-->',
				],

			'columns 4 columns icons ' =>
				[
					'[shortcake_columns columns_block_style="icons" attachment_1="2614" title_1="Qui sommes-nous" description_1="Greenpeace est une organisation internationale qui représente un véritable contre-pouvoir indépendant au service de la protection de l’environnement et des générations actuelles et futures." cta_text_1="Faisons connaissance" link_1="/canada/fr/qui-sommes-nous/" attachment_2="2613" title_2="Notre histoire, nos succès" description_2="Depuis près de cinquante ans, Greenpeace a contribué à d\'importants changements à travers le monde et remporté de nombreuses victoires." cta_text_2="Découvrez notre histoire" link_2="/canada/fr/notre-histoire/" attachment_3="2615" title_3="Soutenir Greenpeace" description_3="Depuis sa création, Greenpeace est une organisation indépendante des États, des pouvoirs politiques et économiques. Notre mission et nos succès sont financés par les dons de particuliers, comme vous." cta_text_3="Soutenez notre indépendance financière" link_3="/canada/fr/agir/faites-un-don/" attachment_4="977" title_4="Devenir bénévole" description_4="Nous plaçons le pouvoir citoyen au cœur de nos campagnes en donnant une résonance au travail de toutes celles et tous ceux qui partagent notre vision, nos espoirs et notre conviction qu’un monde meilleur est possible." cta_text_4="Impliquez-vous" link_4="/canada/fr/agir/impliquez-vous/" /]',

					'<!-- wp:planet4-blocks/columns {"columns_block_style":"icons","columns":[{"attachment":2614,"title":"Qui sommes-nous","description":"Greenpeace est une organisation internationale qui repr\u00e9sente un v\u00e9ritable contre-pouvoir ind\u00e9pendant au service de la protection de l\u2019environnement et des g\u00e9n\u00e9rations actuelles et futures.","cta_text":"Faisons connaissance","cta_link":"/canada/fr/qui-sommes-nous/"},{"attachment":2613,"title":"Notre histoire, nos succ\u00e8s","description":"Depuis pr\u00e8s de cinquante ans, Greenpeace a contribu\u00e9 \u00e0 d\'importants changements \u00e0 travers le monde et remport\u00e9 de nombreuses victoires.","cta_text":"D\u00e9couvrez notre histoire","cta_link":"/canada/fr/notre-histoire/"},{"attachment":2615,"title":"Soutenir Greenpeace","description":"Depuis sa cr\u00e9ation, Greenpeace est une organisation ind\u00e9pendante des \u00c9tats, des pouvoirs politiques et \u00e9conomiques. Notre mission et nos succ\u00e8s sont financ\u00e9s par les dons de particuliers, comme vous.","cta_text":"Soutenez notre ind\u00e9pendance financi\u00e8re","cta_link":"/canada/fr/agir/faites-un-don/"},{"attachment":977,"title":"Devenir b\u00e9n\u00e9vole","description":"Nous pla\u00e7ons le pouvoir citoyen au c\u0153ur de nos campagnes en donnant une r\u00e9sonance au travail de toutes celles et tous ceux qui partagent notre vision, nos espoirs et notre conviction qu\u2019un monde meilleur est possible.","cta_text":"Impliquez-vous","cta_link":"/canada/fr/agir/impliquez-vous/"}]} /-->',
				],

			'columns 2 columns tasks ' =>
				[
					'[shortcake_columns columns_block_style="tasks" title_1="Ik heb 3 minuten tijd voor de oceanen" description_1="Onderteken onze petitie en overtuig onze regeringen om 30% van onze oceanen te beschermen tegen 2030." link_1="https://act.greenpeace.org/page/41085/petition/1?locale=nl-BE" cta_text_1="Ik teken" title_2="Ik heb 10 minuten tijd voor de oceanen" description_2="Help ons een internationale beweging op gang te brengen ter bescherming van onze oceanen door de petitie te delen met zoveel mogelijk contacten. Tweet en/of deel deze petitie op Facebook." link_2="https://act.greenpeace.org/page/41085/petition/1?locale=nl-BE" cta_text_2="Ik deel de petitie" title_3="Ik doe elke dag iets voor de oceanen" description_3="Greenpeace voert momenteel een mariene expeditie van de Noordpool naar de Zuidpool om de vervuiling en bedreigingen aan te kaarten waarmee onze oceanen te kampen hebben en om op te roepen tot het creëren van zeereservaten. Draag jouw steentje bij tot het succes van deze expeditie (een van de meest ambitieuze in de geschiedenis van Greenpeace) door je financiële steun." link_3="https://act.greenpeace.org/page/35835/donate/1?_ga=2.216136790.1373388684.1554969680-131600878.1551171313" cta_text_3="Ik doe een gift" /]',

					'<!-- wp:planet4-blocks/columns {"columns_block_style":"tasks","columns":[{"title":"Ik heb 3 minuten tijd voor de oceanen","description":"Onderteken onze petitie en overtuig onze regeringen om 30% van onze oceanen te beschermen tegen 2030.","cta_link":"https://act.greenpeace.org/page/41085/petition/1?locale=nl-BE","cta_text":"Ik teken"},{"title":"Ik heb 10 minuten tijd voor de oceanen","description":"Help ons een internationale beweging op gang te brengen ter bescherming van onze oceanen door de petitie te delen met zoveel mogelijk contacten. Tweet en/of deel deze petitie op Facebook.","cta_link":"https://act.greenpeace.org/page/41085/petition/1?locale=nl-BE","cta_text":"Ik deel de petitie"},{"title":"Ik doe elke dag iets voor de oceanen","description":"Greenpeace voert momenteel een mariene expeditie van de Noordpool naar de Zuidpool om de vervuiling en bedreigingen aan te kaarten waarmee onze oceanen te kampen hebben en om op te roepen tot het cre\u00ebren van zeereservaten. Draag jouw steentje bij tot het succes van deze expeditie (een van de meest ambitieuze in de geschiedenis van Greenpeace) door je financi\u00eble steun.","cta_link":"https://act.greenpeace.org/page/35835/donate/1?_ga=2.216136790.1373388684.1554969680-131600878.1551171313","cta_text":"Ik doe een gift"}]} /-->',
				],

		];
	}

	/**
	 * Planet4 blocks shortocodes provider.
	 *
	 * @return array
	 */
	public function enblock_shortcodes_provider(): array {
		return [
			// 1-5
			[
				'[shortcake_enblock en_page_id="27713" enform_goal="Petition Signup" en_form_style="full-width" description="enform block description" button_text="Call to Action" en_form_id="22537" /]',

				'<!-- wp:planet4-blocks/enform {"en_page_id":27713,"enform_goal":"Petition Signup","en_form_style":"full-width","description":"enform block description","button_text":"Call to Action","en_form_id":22537} /-->',
			],

			[

				'[shortcake_enblock en_page_id="20001" enform_goal="Petition Signup" en_form_style="full-width" description="enform block description" content_title_size="h1" button_text="Call to Action" en_form_id="22715" /]',

				'<!-- wp:planet4-blocks/enform {"en_page_id":20001,"enform_goal":"Petition Signup","en_form_style":"full-width","description":"enform block description","button_text":"Call to Action","en_form_id":22715} /-->',
			],

			[
				'[shortcake_enblock en_page_id="25032" enform_goal="Petition Signup" en_form_style="side-style" title="this the form title" description="this is form description" content_title="This is a content title" content_title_size="h1" content_description="This is the content description: " button_text="Join us" en_form_id="681" /]',

				'<!-- wp:planet4-blocks/enform {"en_page_id":25032,"enform_goal":"Petition Signup","en_form_style":"side-style","title":"this the form title","description":"this is form description","content_title":"This is a content title","content_description":"This is the content description: ","button_text":"Join us","en_form_id":681} /-->',
			],

			[
				'[shortcake_enblock en_page_id="29490" enform_goal="Other" en_form_style="full-width" title="Title" description="Description" button_text="Sign up" thankyou_title="Thank you" thankyou_subtitle="Thanx again" en_form_id="8224" /]',

				'<!-- wp:planet4-blocks/enform {"en_page_id":29490,"enform_goal":"Other","en_form_style":"full-width","title":"Title","description":"Description","button_text":"Sign up","thankyou_title":"Thank you","thankyou_subtitle":"Thanx again","en_form_id":8224} /-->',
			],

			[
				'[shortcake_enblock en_page_id="44940" enform_goal="Petition Signup" en_form_style="side-style" background="2797" title="阻止破壞北極" description="今天立即加入全球行動！" content_title="阻止破壞北極 今天立即加入全球行動！	" content_description="全賴有您，守護北極的力量日益強大。我們團結一起，讓守護北極的呼聲，揚得更遠！" button_text="立即聯署" thankyou_title="多謝您的聯署" en_form_id="2783" /]',

				'<!-- wp:planet4-blocks/enform {"en_page_id":44940,"enform_goal":"Petition Signup","en_form_style":"side-style","background":2797,"title":"\u963b\u6b62\u7834\u58de\u5317\u6975","description":"\u4eca\u5929\u7acb\u5373\u52a0\u5165\u5168\u7403\u884c\u52d5\uff01","content_title":"\u963b\u6b62\u7834\u58de\u5317\u6975 \u4eca\u5929\u7acb\u5373\u52a0\u5165\u5168\u7403\u884c\u52d5\uff01\t","content_description":"\u5168\u8cf4\u6709\u60a8\uff0c\u5b88\u8b77\u5317\u6975\u7684\u529b\u91cf\u65e5\u76ca\u5f37\u5927\u3002\u6211\u5011\u5718\u7d50\u4e00\u8d77\uff0c\u8b93\u5b88\u8b77\u5317\u6975\u7684\u547c\u8072\uff0c\u63da\u5f97\u66f4\u9060\uff01","button_text":"\u7acb\u5373\u806f\u7f72","thankyou_title":"\u591a\u8b1d\u60a8\u7684\u806f\u7f72","en_form_id":2783} /-->',
			],
		];
	}

	/**
	 * Planet4 blocks shortocodes provider.
	 *
	 * @return array
	 */
	public function social_media_shortcodes_provider(): array {
		return [
			// 1-5
			'social_media facebook timeline' =>
				[
					'[shortcake_social_media facebook_page_tab="timeline" social_media_url="https://www.facebook.com/greenpeacenederland/videos/419976328769397/" /]',

					'<!-- wp:planet4-blocks/social-media {"social_media_url":"https://www.facebook.com/greenpeacenederland/videos/419976328769397/"} /-->',
				],

			'social_media facebook timeline with unecessary embed type' =>
				[
					'[shortcake_social_media embed_type="oembed" facebook_page_tab="timeline" social_media_url="https://www.facebook.com/greenpeacenederland/videos/940985219405333/" /]',

					'<!-- wp:planet4-blocks/social-media {"embed_type":"oembed","social_media_url":"https://www.facebook.com/greenpeacenederland/videos/940985219405333/"} /-->',
				],

			'social_media without embed type and with facebook_page_tab' =>
				[
					'[shortcake_social_media facebook_page_tab="timeline" social_media_url="https://www.facebook.com/greenpeacenederland/videos/837816033233483/" /]',

					'<!-- wp:planet4-blocks/social-media {"social_media_url":"https://www.facebook.com/greenpeacenederland/videos/837816033233483/"} /-->',
				],

			'social_media with facebook_page_tab' =>
				[
					'[shortcake_social_media title="Social Media Block Title" description="Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. " embed_type="oembed" facebook_page_tab="timeline" social_media_url="https://twitter.com/Greenpeace/status/1135478785745346565" alignment_class="alignleft" /]',

					'<!-- wp:planet4-blocks/social-media {"title":"Social Media Block Title","description":"Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut j\u00edcama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. ","embed_type":"oembed","social_media_url":"https://twitter.com/Greenpeace/status/1135478785745346565","alignment_class":"alignleft"} /-->',
				],

			'social_media with facebook page' =>
				[
					'[shortcake_social_media embed_type="facebook_page" facebook_page_tab="timeline" social_media_url="https://www.facebook.com/greenpeace.international/" /]',

					'<!-- wp:planet4-blocks/social-media {"embed_type":"facebook_page","facebook_page_tab":"timeline","social_media_url":"https://www.facebook.com/greenpeace.international/"} /-->',
				],

			'social_media with title oembed' =>
				[
					'[shortcake_social_media title="Social Media Block Title" description="Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. " embed_type="oembed" facebook_page_tab="timeline" social_media_url="https://twitter.com/Greenpeace/status/1135478785745346565" alignment_class="alignleft" /]',

					'<!-- wp:planet4-blocks/social-media {"title":"Social Media Block Title","description":"Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut j\u00edcama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. ","embed_type":"oembed","social_media_url":"https://twitter.com/Greenpeace/status/1135478785745346565","alignment_class":"alignleft"} /-->',
				],

			'social_media facebook events' =>
				[
					'[shortcake_social_media title="Social media (Facebook events)" embed_type="facebook_page" facebook_page_tab="events" social_media_url="https://www.facebook.com/pg/greenpeace.international/events/?ref=page_internal" /]',

					'<!-- wp:planet4-blocks/social-media {"title":"Social media (Facebook events)","embed_type":"facebook_page","facebook_page_tab":"events","social_media_url":"https://www.facebook.com/pg/greenpeace.international/events/?ref=page_internal"} /-->',
				],

			'social_media twitter' =>
				[
					'[shortcake_social_media title="Social media Block (Twitter profile embed) " description="This is Social media block used to embed a TW profile " facebook_page_tab="timeline" social_media_url="https://twitter.com/greenpeace" /]',

					'<!-- wp:planet4-blocks/social-media {"title":"Social media Block (Twitter profile embed) ","description":"This is Social media block used to embed a TW profile ","social_media_url":"https://twitter.com/greenpeace"} /-->',
				],


		];
	}

	/**
	 * Planet4 blocks shortocodes provider.
	 *
	 * @return array
	 */
	public function take_action_boxout_shortcodes_provider(): array {
		return [
			// 1-5

			'take action boxout with title and language' =>
				[
					'[shortcake_take_action_boxout custom_title="Stand against plastic pollution" custom_excerpt="Tell the world’s biggest plastic polluters to invest in reusable ways to deliver their products." custom_link="https://act.greenpeace.org/page/49013/petition/1" custom_link_text="Take Action" custom_link_new_tab="false" tag_ids="67" background_image="21162" /]',
					'<!-- wp:planet4-blocks/take-action-boxout {"custom_title":"Stand against plastic pollution","custom_excerpt":"Tell the world\u2019s biggest plastic polluters to invest in reusable ways to deliver their products.","custom_link":"https://act.greenpeace.org/page/49013/petition/1","custom_link_text":"Take Action","custom_link_new_tab":false,"tag_ids":[67],"background_image":21162} /-->',
				],


			'take action boxout with title and language' =>
				[
					'[shortcake_take_action_boxout take_action_page="32" /]',
					'<!-- wp:planet4-blocks/take-action-boxout {"take_action_page":32} /-->',
				],
			'take action boxout with title and language' =>
				[
					'[shortcake_take_action_boxout take_action_page="32" custom_link_new_tab="false" /]',
					'<!-- wp:planet4-blocks/take-action-boxout {"take_action_page":32} /-->',
				],
			'take action boxout with title and language' =>
				[
					'[shortcake_take_action_boxout custom_title="Ciao mamma" custom_excerpt="Ciao mamma I am a ballon and I floart " custom_link="https://jira.greenpeace.org/browse/PLANET-4024" custom_link_text="FLOA T ME! " custom_link_new_tab="true" tag_ids="89,67" background_image="24159" /]',
					'<!-- wp:planet4-blocks/take-action-boxout {"custom_title":"Ciao mamma","custom_excerpt":"Ciao mamma I am a ballon and I floart ","custom_link":"https://jira.greenpeace.org/browse/PLANET-4024","custom_link_text":"FLOA T ME! ","custom_link_new_tab":true,"tag_ids":[89,67],"background_image":24159} /-->',
				],
			'take action boxout with title and language' =>
				[
					'[shortcake_take_action_boxout custom_title="Cusrtom stuf " custom_link="https://www.google.com" custom_link_text="I AM A CUSTOM LINK" custom_link_new_tab="true" background_image="24020" /]',
					'<!-- wp:planet4-blocks/take-action-boxout {"custom_title":"Cusrtom stuf ","custom_link":"https://www.google.com","custom_link_text":"I AM A CUSTOM LINK","custom_link_new_tab":true,"background_image":24020} /-->',
				],
		];
	}

	/**
	 * Planet4 blocks shortocodes provider.
	 *
	 * @return array
	 */
	public function timeline_shortcodes_provider(): array {
		return [
			// 1-5

			'timeline with title and language' =>
				[
					'[shortcake_timeline timeline_title="Timeline block!" language="en" timenav_position="bottom" start_at_end="true" /]',

					'<!-- wp:planet4-blocks/timeline {"timeline_title":"Timeline block!","language":"en","timenav_position":"bottom","start_at_end":true} /-->',
				],

			'timeline with url' =>
				[
					'[shortcake_timeline timeline_title="Timeline Title" description="Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong" google_sheets_url="https://docs.google.com/spreadsheets/d/1tYlLd_Fx0T_7ZEaf2y9dLfRnr5HzEOW_s0wELp5-j4s/edit#gid=0" language="en" timenav_position="bottom" start_at_end="false" /]',

					'<!-- wp:planet4-blocks/timeline {"timeline_title":"Timeline Title","description":"Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut j\u00edcama green bean celtuce collard greens avocado quandong","google_sheets_url":"https://docs.google.com/spreadsheets/d/1tYlLd_Fx0T_7ZEaf2y9dLfRnr5HzEOW_s0wELp5-j4s/edit#gid=0","language":"en","timenav_position":"bottom","start_at_end":false} /-->',
				],

			'timeline with url position' =>
				[
					'[shortcake_timeline google_sheets_url="https://docs.google.com/spreadsheets/d/1tYlLd_Fx0T_7ZEaf2y9dLfRnr5HzEOW_s0wELp5-j4s/edit#gid=0"  timeline_title="Timeline TItle" description="Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong" language="en" timenav_position="bottom" /]',

					'<!-- wp:planet4-blocks/timeline {"google_sheets_url":"https://docs.google.com/spreadsheets/d/1tYlLd_Fx0T_7ZEaf2y9dLfRnr5HzEOW_s0wELp5-j4s/edit#gid=0","timeline_title":"Timeline TItle","description":"Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut j\u00edcama green bean celtuce collard greens avocado quandong","language":"en","timenav_position":"bottom"} /-->',
				],

			'timeline block test, default' =>
				[
					'[shortcake_timeline timeline_title="Timeline Title" description="Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong" google_sheets_url="https://docs.google.com/spreadsheets/d/1tYlLd_Fx0T_7ZEaf2y9dLfRnr5HzEOW_s0wELp5-j4s/edit#gid=0" language="en" timenav_position="bottom" start_at_end="false" /]',

					'<!-- wp:planet4-blocks/timeline {"timeline_title":"Timeline Title","description":"Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut j\u00edcama green bean celtuce collard greens avocado quandong","google_sheets_url":"https://docs.google.com/spreadsheets/d/1tYlLd_Fx0T_7ZEaf2y9dLfRnr5HzEOW_s0wELp5-j4s/edit#gid=0","language":"en","timenav_position":"bottom","start_at_end":false} /-->',
				],

			'timeline block test, start at end' =>
				[
					'[shortcake_timeline timeline_title="Timeline Title" description="Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong" google_sheets_url="https://docs.google.com/spreadsheets/d/1tYlLd_Fx0T_7ZEaf2y9dLfRnr5HzEOW_s0wELp5-j4s/edit#gid=0" language="en" timenav_position="bottom" start_at_end="true" /]',

					'<!-- wp:planet4-blocks/timeline {"timeline_title":"Timeline Title","description":"Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut j\u00edcama green bean celtuce collard greens avocado quandong","google_sheets_url":"https://docs.google.com/spreadsheets/d/1tYlLd_Fx0T_7ZEaf2y9dLfRnr5HzEOW_s0wELp5-j4s/edit#gid=0","language":"en","timenav_position":"bottom","start_at_end":true} /-->',
				],

			'timeline block test, start at end, navigation at top' =>
				[
					'[shortcake_timeline timeline_title="Timeline Title" description="Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong" google_sheets_url="https://docs.google.com/spreadsheets/d/1tYlLd_Fx0T_7ZEaf2y9dLfRnr5HzEOW_s0wELp5-j4s/edit#gid=0" language="en" timenav_position="top" start_at_end="true" /]',

					'<!-- wp:planet4-blocks/timeline {"timeline_title":"Timeline Title","description":"Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut j\u00edcama green bean celtuce collard greens avocado quandong","google_sheets_url":"https://docs.google.com/spreadsheets/d/1tYlLd_Fx0T_7ZEaf2y9dLfRnr5HzEOW_s0wELp5-j4s/edit#gid=0","language":"en","timenav_position":"top","start_at_end":true} /-->',
				],
		];
	}
	// phpcs:enable
}




