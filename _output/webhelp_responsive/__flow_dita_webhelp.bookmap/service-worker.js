/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["_graphics/android-chrome-192x192.png","b3d199a78619dbfc2dc0cf5de19c5cf3"],["_graphics/android-chrome-256x256.png","247259d2b1ecaff8e3b6b1fc25337d9b"],["_graphics/booking.com_filter_example_1.png","9eba76415e1f208ffee0c8513e329030"],["_graphics/collection-type_attributes.png","65fe518ba3b6fc9375012f57c8efee06"],["_graphics/configure.png","4948fe1ace5c8babef7eaf7d33b4f218"],["_graphics/configure_transformation_scenarios.png","8c4cd077228d24bb24cb3b1fef77a513"],["_graphics/copy_embed_code.png","92b8b43d490398c8a6a7a6c7bdb0e2ba"],["_graphics/dita_map_tree.png","73380419ae3ab3d819246b0d7c3e721c"],["_graphics/dita_map_tree_structure.png","804edc6fdff05672518a173eb63fa47a"],["_graphics/dita_open_toolkit.png","4dad1a13ca9cdde37e243f62ac4020de"],["_graphics/dita_repository.png","69a274e2e0751ba7135914ab64316339"],["_graphics/dita_web_help.png","4f3f2d74946eab1df2049e9fb3fa7f07"],["_graphics/ditamap.png","79bb46d5c627fc6e8049690eb3dd8bae"],["_graphics/ditaval_filter_file.png","8981462c270155a8f37b1472eceecd13"],["_graphics/edit_topicref_attributes_inplace.png","eeaf0b30ebb43286141cfafd8947a5e2"],["_graphics/epub.jpg","6a1294fdd2276cc5ae821ffb9d1ef645"],["_graphics/example_topic.png","a391852611ea329f6c6de1325fb687fd"],["_graphics/filtering_content.png","53d5eaaefd32d4c2aae7201ebe05ddaf"],["_graphics/information_types.png","7659d3388944b8b941cc491e5ee41813"],["_graphics/insert_media_window.png","5801de0e7ad71470a99ce20ae156a773"],["_graphics/insert_reference_to_media_resource_button.png","890587a34d6524e3b4118851d5063971"],["_graphics/minimalism.jpg","34eb43afc7076c15234758d615ecf6f1"],["_graphics/oxygen_xml_quick_fixes.png","8daae40c4e87d97083f23b87f64685e4"],["_graphics/publishing_documentation_scheme.png","f119be3e958829e451aa4a48475ebb48"],["_graphics/result_of_oxygen_s_webhelp_responsive.png","c352cafd2174859edf7d97438d67cbb0"],["_graphics/show_topic_titles.png","1ca5be2d9e6a98ddbf8ba01605a60c57"],["_graphics/stub_topic.png","0920a9153d31a0e88ec9f40c90518107"],["_graphics/stub_topic_chunked.png","3f8ae74301b92c085a425c80d6856468"],["_graphics/stub_topic_webhelp.png","ae248362b6972a6d8a21a54999aa38f9"],["_graphics/styles_button.png","5c895a8c4d6fc9dc20c101be24e18d99"],["_graphics/webhelp_responsive_templates.png","94bab890b090b14f9fbd6b32d0bb6893"],["_graphics/wikipedia_tooltip_example.png","c1553b70fcdbfa45ef03bad1455eb736"],["commonltr.css","f6bc4d7a6575fe9e096237df04473e86"],["commonrtl.css","508be4a820345646985af153a9fd2cec"],["context-help-map.xml","8cdd3de50e0347fce7569a8916e4abb3"],["en/co_add_collection_type_links.html","9967a143b04fe6cd3f4a0084d08bce38"],["en/co_add_collection_type_links_2.html","a4addd49456476fda8965ca361f98367"],["en/co_audience_oriented_authoring.html","24654edc7e6794dd422842ed65a31d51"],["en/co_audience_oriented_authoring_2.html","fab88fc847b8d21cf7c4a567de56c525"],["en/co_automatic_flowchart_generation.html","b9a92672e5013c3fcbf54af54de91db9"],["en/co_automatic_flowchart_generation_2.html","aad7c4c81c9f82f7c47d8d51d744259b"],["en/co_coherence.html","94587b165cecc050745b03b363d56022"],["en/co_coherence_2.html","fddffef7da4d50cc2b65cfb1e7d19a7a"],["en/co_consistency.html","d674dd23dd8c02976f9297c24787f984"],["en/co_consistency_2.html","6ab385f07e4271fd7f2a1ac667d3f4aa"],["en/co_dita_for_kids.html","75fe4374fe0113652f2bde3067e76361"],["en/co_dita_for_kids_2.html","e90587a726c13f20aef17d1db128bb0d"],["en/co_dita_open_toolkit__ot.html","d93ee7dbb1b9cb16850ccff407ecb2cf"],["en/co_ditatoo_dita_cms.html","62fad85b2cc3ea8265f02fd758fe7b7d"],["en/co_do_not_over_use_inline_links.html","d2404534247be9233da535048f99c134"],["en/co_do_not_over_use_inline_links_2.html","81fa8e7121640a4b29571d5848fafece"],["en/co_do_not_overuse_relationship_tables.html","35f4051fe73463503bc314a1386211b0"],["en/co_do_not_overuse_relationship_tables_2.html","8a2d75590373e182958413c3cea44e62"],["en/co_five_copywriting_errors.html","09a150f058fc3657b1113dff5643c849"],["en/co_five_copywriting_errors_2.html","eedf1b59503d9f6747dae1cf93aac222"],["en/co_free_e_learning_course_learningdita.html","a3b97ade258cf355995aa988bd5c73cd"],["en/co_free_e_learning_course_learningdita_2.html","2cc106b78a97c6f609cbebbbd73eefe2"],["en/co_glossaries_versus_tooltips.html","42f2a8077e7db22a2e407080db545c20"],["en/co_glossaries_versus_tooltips_2.html","b707b8bd39c49b11499678f4ec25ce1b"],["en/co_guidelines_for_chunking_content.html","badaa2cd35507d407b814e772b31a47a"],["en/co_guidelines_for_chunking_content_2.html","bd494f59103ffaf3ed161909a6e37291"],["en/co_guidelines_for_creating_dita_maps_and_bookmaps.html","f74f5e04211e82f094ab12aa3d04202f"],["en/co_guidelines_for_creating_dita_maps_and_bookmaps_2.html","064a17611359ae7b0e3074950bb04a26"],["en/co_guidelines_for_writing_topic_titles.html","80799f8cf9423d5e92d829c40ecb91ae"],["en/co_guidelines_for_writing_topic_titles_2.html","658aaf142ebd06fd7ddce6282260100f"],["en/co_how_does_conditional_processing_work.html","e487ab8491ea19424ca7a0570539df3c"],["en/co_how_does_conditional_processing_work_2.html","8bec80b683501294ef4ca2c3152c3356"],["en/co_illustrations_and_animations.html","d08a44a74c1a15d9fc837979ab0f7c6e"],["en/co_illustrations_and_animations_2.html","0846b909f702d4616bff9a8080e25c65"],["en/co_information_model.html","e52b0840b870c80a454ee4cd5e0094d4"],["en/co_information_model_2.html","f58f32d126bf2f450f0559d9c8fc9a05"],["en/co_information_type.html","4001f6c55f85c172952c6ce88b042948"],["en/co_information_unit.html","d4c7562de192712c921caeb2e758edda"],["en/co_information_unit_2.html","08b00674b626cc0d0a0dab6e65c919c8"],["en/co_minimalism.html","3c03ab6d9e1bfd8dde416f4899e3bc38"],["en/co_minimalism_2.html","0e5af80a163ed40675ba720ff5dbfc6c"],["en/co_multi_channel_publishing.html","7276d6b692915def060cff4813eaddc0"],["en/co_multi_channel_publishing_2.html","e14809f23daa79e740bbb60e7a8ec59f"],["en/co_new_in_oxygen_19_0.html","93979a7c5832b458c2fc0ff628e072f0"],["en/co_new_in_oxygen_19_0_2.html","854f854abf2d5249eac0267eb7d95f2c"],["en/co_new_in_oxygen_21.html","b7ba27ab94ef861ad9a10cb586528407"],["en/co_new_in_oxygen_21_1.html","5745dc747f109b54139dae7630560d06"],["en/co_oxygen_xml.html","c6c84b4e01841aa4784c799558fd7a30"],["en/co_oxygen_xml_2.html","17e2b3a1e29e66b9bd1ee1ab18f42b67"],["en/co_publishing.html","b7954fe6d6eee65b3ea4e1e808ff6e13"],["en/co_publishing_2.html","b17bb8459f0a795c2a01f379f580147b"],["en/co_publishing_strategies.html","e2396e78b99772958811710d9d8df046"],["en/co_publishing_strategies_2.html","86a07adaa2556f29fe0a766e905b2645"],["en/co_quick_fixes.html","3c9d479dfef189a544ae91082e45dc09"],["en/co_quick_fixes_2.html","40ee1ab1e1618e906985bba7850248a8"],["en/co_re_using_content_from_non_dita_sources.html","3e71aa49e9dc78ff6c82c4c3596a95e3"],["en/co_re_using_content_from_non_dita_sources_2.html","73f1d45537d784a38eb70b3524361812"],["en/co_re_using_dita_maps.html","317a13658191fddb84f94acf953b2f00"],["en/co_re_using_dita_maps_2.html","382afb90a015c6d6991d357c7c507539"],["en/co_re_using_elements.html","64a2283f869506c9dfbaf3b2161af48f"],["en/co_re_using_elements_2.html","6d216de03d47d72bce27fea4f48f22ba"],["en/co_re_using_topics.html","591022c09dbf6764090b2722bdcf7c93"],["en/co_re_using_topics_2.html","e40ebd54f884971a8338fdb4b4dec861"],["en/co_responsive_online_help.html","a95c16ec94f4cc4ad3cd88da111d73c6"],["en/co_responsive_online_help_2.html","6473be227f73f54e17b9dfd5b14701b5"],["en/co_segmentation.html","ff7ed30612ea4ba5b3ffcf658158da04"],["en/co_segmentation_2.html","6913a96fa44fde0a0eefe35ebc57f800"],["en/co_single_sourcing.html","d54def0754ff744542d410baad190875"],["en/co_single_sourcing_2.html","37b46d286a034ad6a8e33080d088be56"],["en/co_structure.html","41b97b89142773329d5d524d9d9d1445"],["en/co_structure_2.html","ecb5e9f16b3a049f94fa57d30b2e2670"],["en/co_structure_vs__lay_out.html","4ee3000c0bf078bf36c55af4d04ac31b"],["en/co_structure_vs__lay_out_2.html","dea93724593fa536a819f5b36fa95cdb"],["en/co_structured_authoring.html","41dcfe0cfeb79acdb48ff01ff43e795e"],["en/co_structured_authoring_2.html","12a9a373fd839b611a214af4147aa2d6"],["en/co_terminology.html","832bce52100a732d64a577a89b7037d0"],["en/co_think_about_the_phrasing_and_positioning_of_inline_links.html","bae140df386b7a46bee422e31de8e321"],["en/co_think_about_the_phrasing_and_positioning_of_inline_links_2.html","2bb1502db2d31e7fe19afcc245b4cf04"],["en/co_titles.html","16110a137589d8a9586358237026146d"],["en/co_titles_2.html","17b7b5557c02d524e948de77ac318a70"],["en/co_using_conrefs.html","12f63f6fc34a12a09bc979598b02cd6f"],["en/co_using_conrefs_2.html","e6006d811c0a8764a50e3abfb181b9f9"],["en/co_webcast__localization_and_the_dita_open_toolkit.html","75d62e1561d0eef9e92403294bf02cec"],["en/co_what_does_the_dita_open_toolkit__ot__do.html","4241febb852ca7c971d99a41429a26ce"],["en/co_what_is_a_bookmap.html","932afc372e25dc4b3792f158449cda28"],["en/co_what_is_a_bookmap_2.html","f0c8db8e92de3d7948429a1f906d13ca"],["en/co_what_is_a_dita_map.html","8bdd4916e5230ff065a5aeb00a28ad25"],["en/co_what_is_a_dita_map_2.html","415f47626a49b2d38b3bf2b02bbf8b9c"],["en/co_what_is_a_ditaval_file.html","777e48a92aed3d9ef4e223eeeb581e95"],["en/co_what_is_a_topic.html","990c1622875397a1ffd8e05b5150fe76"],["en/co_what_is_a_topic_2.html","8e65cd3e5e9b0bf882af6883a871603d"],["en/co_what_is_an_information_type.html","7bdb872b335c024424c9f649f57a8207"],["en/co_what_is_an_information_type_2.html","6a9ae5fe82acf49c2c2d1ceeca77181d"],["en/co_what_is_conditional_processing.html","16880a48544e6e919df18ec7911a8da0"],["en/co_what_is_conditional_processing_2.html","72f0a20c9a833bfc5ab22c39c60ef535"],["en/co_what_is_dita.html","bc3eea4cb781f1e775192d8abdfcf2b3"],["en/co_what_is_dita_2.html","96a080181dd59ca0f09d5fdec8554656"],["en/co_what_is_ditatoo_dita_cms.html","436b900d44668689f6d25608fe271a7c"],["en/co_what_is_the_dita_open_toolkit__ot.html","fbc5d582e632181b2026056051589243"],["en/co_why_re_use_content.html","0192ae7958dae5889a123b16b0482a4f"],["en/co_why_re_use_content_2.html","86547e99f34370f55f5bc3fa7ea1cf9c"],["en/co_why_use_bookmaps.html","31cca069b76fe92693f4b2ace0c5a8ed"],["en/co_why_use_conditional_processing.html","7cee7a0af1558034a9e68622cb8dbc5d"],["en/co_why_use_conditional_processing_2.html","cd2c44d00ae759a44978e46cf64b0a93"],["en/co_why_use_dita_maps.html","1fdcb92d8e6a7eedd14d20941e929e52"],["en/co_why_use_dita_maps_2.html","f3c810691ce7d8fbad32f2c02618d933"],["en/co_why_use_metadata.html","03e8dcc0c38d16b3ef3ff118f3cda76d"],["en/co_why_use_metadata_2.html","b46b1f9a8554bb712d7e8250f9756375"],["en/co_xml_editors.html","7907f42d9fc161eeb4a96d1542529892"],["en/co_xml_editors_2.html","a7df6d62144707759f4f1b23e8556341"],["en/ta_add_the_glossary_term_to_the_glossary_map.html","82214ec85a87069d94164d7d8acf7dfa"],["en/ta_add_the_glossary_term_to_the_glossary_map_2.html","ee74fe9e46704c8beb81704a26c11f3c"],["en/ta_adding_a_dutch_dictionary_to_oxygen_s_spell_check.html","eb68371a8a1d3ee87c50a65bb21c4517"],["en/ta_adding_a_dutch_dictionary_to_oxygen_s_spell_check_2.html","303e6d79d60b1c00e2a03024f40a2243"],["en/ta_create_a_glossterm_topic.html","06d4f2ffa8f19eb469af6775104e5df4"],["en/ta_create_a_glossterm_topic_2.html","ba8ada335535768fb242d0a918ba34ad"],["en/ta_creating_tooltips_in_oxygen_s_online_help_output.html","5521c555e8cecfa539e46958844b4747"],["en/ta_creating_tooltips_in_oxygen_s_online_help_output_2.html","9f4df161117062ee8ce411f5ca851fd1"],["en/ta_displaying_topic_titles_instead_of_file_names_in_a__ditamap_file.html","c52a5047c36dc36a33f8900ff91a86fc"],["en/ta_dita2pdf.html","916e102e9fd08adb3c2864875780abb3"],["en/ta_dita2pdf_2.html","e0092622b96a5cb82c3fe9e507ebc1f8"],["en/ta_embedding_a_youtube_video_in_dita.html","9cc6d950f7184cd0936c218ee6a8e1da"],["en/ta_publishing_your_dita_content_to_multiple_output_formats.html","0d91376ba1dacb2a3f488bfdf5a3c2ef"],["en/ta_publishing_your_dita_content_to_multiple_output_formats_2.html","e6db560d23d794b9c9f7e59a77fd6da7"],["en/ta_reference_the_glossary_term_in_a_topic.html","e66bfa12021e6034ae0773581388c278"],["en/ta_reference_the_glossary_term_in_a_topic_2.html","ae799852a3d951e5591a22d4a4a8baa1"],["en/ta_selecting_dita_map_webhelp_responsive_as_output_format.html","854ebb2d76ae564125701b2ac72e791d"],["en/ta_selecting_dita_map_webhelp_responsive_as_output_format_2.html","212a3737529aa7a9e6a34ab588f28834"],["en/to_automation_of_documentation_processes.html","5e251a618375f58615df349084c1b0e4"],["en/to_best_practices_of_structured_authoring.html","56e730e6fe3cc87db43bffda510930b5"],["en/to_conditional_processing.html","456baf707516af6b3da8416f3d9cdc9f"],["en/to_different_levels_of_content_re_use.html","f5e9c78c92031f4b4fa543b899ab7123"],["en/to_different_levels_of_content_re_use_2.html","d0a1923df437331d9ab7a7a5038dae95"],["en/to_dita.html","223d14d087f1ab04b33d4b81c8bee9f7"],["en/to_glossaries_through_tooltips.html","6ffcf02994f8902fc13bcd3b33ebf552"],["en/to_glossaries_through_tooltips_2.html","25d521a86cd3de2cdb8f16bc66cd9369"],["en/to_guidelines_and_tips_oxygen_xml.html","18b01c9790ba163e723e8defc4897ccc"],["en/to_guidelines_for_creating_links.html","5deb5d8a4d50526e9e5bcfbb2d2923ea"],["en/to_guidelines_for_creating_links_2.html","df822614a9852a7d62cdc6c64672a7dd"],["en/to_learning_dita.html","84021c895acedab343c57aa88b91a1ee"],["en/to_oxygen_xml_software_updates.html","4f1fb30684370951ebd3f7ed4aadbec4"],["en/to_publishing_dita_content.html","e7f0f7eba4af70fe77708123b271e308"],["en/to_technical_writing.html","b50ef99a3ce745133d2472b4e4f99e7e"],["en/to_technical_writing_2.html","2072a7d95fad8411bea126f02d3f5e0c"],["en/tr_oxygen_webhelp_and_epub_transformation_error.html","7544be1c6c035e7a261eb1380983a8ab"],["en/tr_oxygen_webhelp_and_epub_transformation_error_2.html","010ea59b58e9809c6c0d55abf0aa3e5f"],["index.html","21aadc42dcd1f3ed796533a2d3b5c9af"],["index.xml","08f0841c4a5c23ed5cf51ef311bd6616"],["indexTerms.html","640f8fee581e7798dda23f757860132c"],["indexterms.properties","d87f855afcba7cfaa6ec55ed31e011d5"],["license-3rd-party.txt","6df2b7c80d604f06e5afec733426f604"],["manifest.json","e61defa1a526c719a8921d205c6ee108"],["oxygen-webhelp/app/config.js","1a1588f276a109d905df869c357394df"],["oxygen-webhelp/app/context-help/context-help-map.js","7f80880108479fbb1391708f210ac1c0"],["oxygen-webhelp/app/context-help/context-help.js","c9ef0214b5a1d66b053715157e7e097a"],["oxygen-webhelp/app/core/expand.css","39bba87fbb894bbf6f18ab624398ed8f"],["oxygen-webhelp/app/core/expand.js","926fbb1ba7431e4de36953ee7baaf896"],["oxygen-webhelp/app/core/fonts.css","e921d66eb76667201510ef779762521c"],["oxygen-webhelp/app/core/icons.css","46e94eaf26d71dffbe70fe9686b583bd"],["oxygen-webhelp/app/core/redirect.js","9fb11c64b811453f436c6aead2ad1a96"],["oxygen-webhelp/app/core/webhelp-dot3x.css","543709a839714b135e453d375ee8512a"],["oxygen-webhelp/app/core/webhelp.css","1734953bd95c1c5b4c95b707dad3634f"],["oxygen-webhelp/app/core/webhelp.js","740cca86b61108b3534ea2812670393e"],["oxygen-webhelp/app/image-map/image-map.js","dd3146ff66c894ba57a56da3009a3f40"],["oxygen-webhelp/app/img/Copy.png","7435b448b8d75372650735888535f3ec"],["oxygen-webhelp/app/img/attention.svg","1cd0c044c6ff6e9507c803dc96a7e2af"],["oxygen-webhelp/app/img/caution.svg","f6744f5563f52e30b74ac7d9c1a43ec1"],["oxygen-webhelp/app/img/danger.svg","25b7a8b7bb2212ae64eb3b060960b899"],["oxygen-webhelp/app/img/dot.png","c3b277cbb8c6c24b44a3918d85ad3a25"],["oxygen-webhelp/app/img/important.svg","12829c8ee7e1dcdcdc5099b9ca5742ee"],["oxygen-webhelp/app/img/link-icon.png","3580de88650d6b30c37310fbf8b89e66"],["oxygen-webhelp/app/img/note.svg","8074048224187793557b0c7582ddd2fb"],["oxygen-webhelp/app/img/remember.svg","3eed64588cdfa44ae4a36ee65951d84a"],["oxygen-webhelp/app/img/restriction.svg","0da19b0e691edf2cd86d045762d239ef"],["oxygen-webhelp/app/img/star.png","570d8a7f5add19f4b7d6a3b8f1228ca5"],["oxygen-webhelp/app/img/starsSmall.png","87c9406551db2c936d8ab3588108b64a"],["oxygen-webhelp/app/img/tip.svg","9abe99fb547d3f9da226d7d45feb07f6"],["oxygen-webhelp/app/img/troubleshooting.svg","ccad4b0732c5b3203bfe988492607b14"],["oxygen-webhelp/app/img/warning.svg","1c2f9f294340130553e921fb7534ffd8"],["oxygen-webhelp/app/indexterms-page.css","2b909c448378b3c58cbc4f89aed163ae"],["oxygen-webhelp/app/indexterms-page.js","62c515effc2c4b426d5f1702dd6eaff5"],["oxygen-webhelp/app/indexterms/indexterms.css","50feadaba8aa95b40d434d43ec237dbe"],["oxygen-webhelp/app/jquery-private/jquery-private.js","e4bcd252469d39e9399a1d0b304d75a4"],["oxygen-webhelp/app/jquery-private/jquery.bootpag.amd.js","25f674419ae37dbf4e67c575c32b52fb"],["oxygen-webhelp/app/jquery-private/jquery.highlight.amd.js","2bcc562e37a1d8e0fbfc39fed5c85f61"],["oxygen-webhelp/app/jquery-private/jquery.rwdImageMaps.amd.js","ca34defc957bbd1a75b705e6cde1fa34"],["oxygen-webhelp/app/localization/localization.js","c6cdd5d63295f426a80a89abd2225516"],["oxygen-webhelp/app/localization/strings.js","8cfe49069febecb372c13496a1753f07"],["oxygen-webhelp/app/main-page.css","79a75b6e6fcfb2155dc655d8e700510d"],["oxygen-webhelp/app/main-page.js","07e97a4c6e2b430aebfe97bb6818d1bd"],["oxygen-webhelp/app/nav-links/json/co_dita_open_toolkit__ot-d62e3246.js","e9be4ff5b26e7c911e85245a66f4439c"],["oxygen-webhelp/app/nav-links/json/co_dita_open_toolkit__ot-d62e3373.js","384f7262eec700aeddd10a91a9a6dff1"],["oxygen-webhelp/app/nav-links/json/co_dita_open_toolkit__ot-d62e5809.js","23a756fca3638def6d5a2e81a679f261"],["oxygen-webhelp/app/nav-links/json/co_ditatoo_dita_cms-d62e3406.js","707b06de69e7032c344b93f884706b7f"],["oxygen-webhelp/app/nav-links/json/co_ditatoo_dita_cms-d62e3533.js","476b5ee0e86a5f152720de7b5899b891"],["oxygen-webhelp/app/nav-links/json/co_ditatoo_dita_cms-d62e5969.js","83f029e54665128786653bdb7094ad5f"],["oxygen-webhelp/app/nav-links/json/co_guidelines_for_chunking_content-d62e1651.js","d6bd0d579826db55260731b87da07bce"],["oxygen-webhelp/app/nav-links/json/co_multi_channel_publishing-d62e1364.js","8e08e5b4011394124963c151bfd4270a"],["oxygen-webhelp/app/nav-links/json/co_multi_channel_publishing-d62e1371.js","7b8432819efff2bbb3ce8161c927402e"],["oxygen-webhelp/app/nav-links/json/co_multi_channel_publishing-d62e3928.js","89fdfe3b4c9ab4421f11e4be57ca1b23"],["oxygen-webhelp/app/nav-links/json/co_multi_channel_publishing-d62e925.js","0ae1fa6c672a884cbca81b2062e8b986"],["oxygen-webhelp/app/nav-links/json/co_oxygen_xml-d62e1564.js","981c03f0f40dc725c0b72e01e7fc7f17"],["oxygen-webhelp/app/nav-links/json/co_oxygen_xml-d62e1565.js","833a8ddb25e4ed9ff094b35879e358ec"],["oxygen-webhelp/app/nav-links/json/co_oxygen_xml-d62e1571.js","baaba0f5f8a65185380bc63568b10168"],["oxygen-webhelp/app/nav-links/json/co_oxygen_xml-d62e1687.js","177be011dd06c45690572d03858bcc40"],["oxygen-webhelp/app/nav-links/json/co_oxygen_xml-d62e4128.js","9673c7ea9fb60be23bad6f3d7d5fb49a"],["oxygen-webhelp/app/nav-links/json/co_publishing_strategies-d62e2765.js","6e3231dcef10ad26ba11d81278c3d303"],["oxygen-webhelp/app/nav-links/json/co_publishing_strategies-d62e2766.js","e9affc1ab5e5898a76becb8183939e5c"],["oxygen-webhelp/app/nav-links/json/co_publishing_strategies-d62e2892.js","54842f7e1128df9d47bc8502afd3bacd"],["oxygen-webhelp/app/nav-links/json/co_publishing_strategies-d62e5329.js","d75cb48ae1bc0c3699673119edfad7c8"],["oxygen-webhelp/app/nav-links/json/co_responsive_online_help-d62e2087.js","a07ce6e94f38c81a791abda38c2979d3"],["oxygen-webhelp/app/nav-links/json/co_responsive_online_help-d62e2564.js","4276f3de96df7ad67188055becd3d717"],["oxygen-webhelp/app/nav-links/json/co_responsive_online_help-d62e2565.js","edc91d575249794dd76981755c43d21c"],["oxygen-webhelp/app/nav-links/json/co_responsive_online_help-d62e2691.js","e30270ecafa4477bd79242f6f4016db5"],["oxygen-webhelp/app/nav-links/json/co_responsive_online_help-d62e5128.js","7bc70ce3674504ef2d22c1e475a9b08e"],["oxygen-webhelp/app/nav-links/json/co_structured_authoring-d62e2247.js","79bc07430cef2a737e2253ab427f7f38"],["oxygen-webhelp/app/nav-links/json/co_structured_authoring-d62e2928.js","ccc49e07ec165d6371d67618affbf783"],["oxygen-webhelp/app/nav-links/json/co_structured_authoring-d62e364.js","16493dae7744a385adc9217bc04f7510"],["oxygen-webhelp/app/nav-links/json/co_structured_authoring-d62e371.js","e3bfeb57435cf4879b5509339d363fe6"],["oxygen-webhelp/app/nav-links/json/co_structured_authoring-d62e404.js","0f55e4e28133b2b84f09a6409d561cab"],["oxygen-webhelp/app/nav-links/json/co_terminology-d62e2647.js","9becf85c4c9f56fb3eabc54861ad9bf5"],["oxygen-webhelp/app/nav-links/json/co_what_is_a_dita_map-d62e1004.js","bf5cf4a200f622267631125a385c9896"],["oxygen-webhelp/app/nav-links/json/co_what_is_a_dita_map-d62e1011.js","8d119f0c8aa0f6d89ba0134e2a5f453d"],["oxygen-webhelp/app/nav-links/json/co_what_is_a_dita_map-d62e3568.js","113e22566dba5e18a0454d49e8f9512b"],["oxygen-webhelp/app/nav-links/json/co_xml_editors-d62e1524.js","eedd995e740a994066260b08245d8534"],["oxygen-webhelp/app/nav-links/json/co_xml_editors-d62e1525.js","299dca923a2470e18187e844f2b6755b"],["oxygen-webhelp/app/nav-links/json/co_xml_editors-d62e1531.js","d4acf87884e8e56609978401f44af302"],["oxygen-webhelp/app/nav-links/json/co_xml_editors-d62e1647.js","7a86582281bda93fbaa05cc0eabdea49"],["oxygen-webhelp/app/nav-links/json/co_xml_editors-d62e4088.js","326679a3fc32ff8b59ab4fec098f1cff"],["oxygen-webhelp/app/nav-links/json/nav-links.js","8d446bbe55278428624ba9fb48336330"],["oxygen-webhelp/app/nav-links/json/ta_creating_tooltips_in_oxygen_s_online_help_output-d62e1807.js","83b9aebd4169e83f345eefe73bb3d6dd"],["oxygen-webhelp/app/nav-links/json/ta_creating_tooltips_in_oxygen_s_online_help_output-d62e2284.js","38a0b87801d4ea2ca4d0e4764d9e2d68"],["oxygen-webhelp/app/nav-links/json/ta_creating_tooltips_in_oxygen_s_online_help_output-d62e2285.js","85cf19bffd97852630bf58f3d245a200"],["oxygen-webhelp/app/nav-links/json/ta_creating_tooltips_in_oxygen_s_online_help_output-d62e2411.js","e7d877c4c47513c450a6a15be3f0dc36"],["oxygen-webhelp/app/nav-links/json/ta_creating_tooltips_in_oxygen_s_online_help_output-d62e4848.js","7bb7fc9b3c9f212b66618129cc075e48"],["oxygen-webhelp/app/nav-links/json/to_automation_of_documentation_processes-d62e1244.js","03136d67f8a0455b6456f6ffb2a09157"],["oxygen-webhelp/app/nav-links/json/to_automation_of_documentation_processes-d62e1251.js","667b480b13d8840a29dd5b2e3653cd19"],["oxygen-webhelp/app/nav-links/json/to_automation_of_documentation_processes-d62e3808.js","934155363444ebc9537fc7e0d9f59894"],["oxygen-webhelp/app/nav-links/json/to_best_practices_of_structured_authoring-d62e3088.js","49864aededffc5c35e39f81c53c51625"],["oxygen-webhelp/app/nav-links/json/to_best_practices_of_structured_authoring-d62e484.js","59f4860deb25ff9abfbfda58c8acc38a"],["oxygen-webhelp/app/nav-links/json/to_best_practices_of_structured_authoring-d62e491.js","d0213f2e5ad9c041ce2348f19f4d1921"],["oxygen-webhelp/app/nav-links/json/to_best_practices_of_structured_authoring-d62e524.js","895faff087d9fc17a2d174b0eb9469d7"],["oxygen-webhelp/app/nav-links/json/to_conditional_processing-d62e2885.js","d0a98deca357aa899bf14a4b0dea4d72"],["oxygen-webhelp/app/nav-links/json/to_conditional_processing-d62e2886.js","20ef4008a481b49eb4bdfb0a709eede7"],["oxygen-webhelp/app/nav-links/json/to_conditional_processing-d62e3012.js","689178326ff7826ab0973ffa1e808638"],["oxygen-webhelp/app/nav-links/json/to_conditional_processing-d62e5449.js","4976f8f97ad87ecec624f59cc403ca08"],["oxygen-webhelp/app/nav-links/json/to_different_levels_of_content_re_use-d62e1964.js","db797a82e358521ff22df877e15d0e24"],["oxygen-webhelp/app/nav-links/json/to_different_levels_of_content_re_use-d62e1965.js","68a33ab5549281fac7c8fd4cad1363b7"],["oxygen-webhelp/app/nav-links/json/to_different_levels_of_content_re_use-d62e204.js","1c78fef609a0d256cbb5719e7409d8d2"],["oxygen-webhelp/app/nav-links/json/to_different_levels_of_content_re_use-d62e2091.js","b04da3a04cb1d7920b700e29136e3c51"],["oxygen-webhelp/app/nav-links/json/to_different_levels_of_content_re_use-d62e4528.js","d97300fbf4a01d67cc83a63fe40e020f"],["oxygen-webhelp/app/nav-links/json/to_dita-d62e3488.js","6ee6df36072ba552e51907304959a8b1"],["oxygen-webhelp/app/nav-links/json/to_dita-d62e884.js","16a9c0e6b09555f7d30828180882317c"],["oxygen-webhelp/app/nav-links/json/to_dita-d62e891.js","66b20b8d620025e28dd9acfe65883663"],["oxygen-webhelp/app/nav-links/json/to_dita-d62e924.js","a9de97b3a8dd638d36cd70f4e5a57f74"],["oxygen-webhelp/app/nav-links/json/to_glossaries_through_tooltips-d62e1727.js","9b9df6ecd80d58f51c0ad66baa0ea52b"],["oxygen-webhelp/app/nav-links/json/to_glossaries_through_tooltips-d62e2204.js","088531955f914f6489b904d47dd117f9"],["oxygen-webhelp/app/nav-links/json/to_glossaries_through_tooltips-d62e2205.js","96e2e3a6d38ab95628338ddec988990d"],["oxygen-webhelp/app/nav-links/json/to_glossaries_through_tooltips-d62e2331.js","ee73cf7f79428c58ad17ab717a512fb4"],["oxygen-webhelp/app/nav-links/json/to_glossaries_through_tooltips-d62e4768.js","98e19c195722101008c8c8879dbb558b"],["oxygen-webhelp/app/nav-links/json/to_guidelines_and_tips_oxygen_xml-d62e1604.js","716d27449fdf5af1a7af2997ba6997e5"],["oxygen-webhelp/app/nav-links/json/to_guidelines_and_tips_oxygen_xml-d62e1605.js","fde804567ac6a70792ece6fd77b14320"],["oxygen-webhelp/app/nav-links/json/to_guidelines_and_tips_oxygen_xml-d62e1611.js","754db29d11e652f8712c78ac38694f84"],["oxygen-webhelp/app/nav-links/json/to_guidelines_and_tips_oxygen_xml-d62e4168.js","5941ab001ac6cd311e4fb3c6c800feaa"],["oxygen-webhelp/app/nav-links/json/to_guidelines_for_creating_links-d62e1764.js","25db72ba3cf3129b67300e86d75483f6"],["oxygen-webhelp/app/nav-links/json/to_guidelines_for_creating_links-d62e1765.js","5dc11a2a512e34180fa507c0b3a2e95c"],["oxygen-webhelp/app/nav-links/json/to_guidelines_for_creating_links-d62e1891.js","2d38e7636239dc799e61cb3c4b883373"],["oxygen-webhelp/app/nav-links/json/to_guidelines_for_creating_links-d62e4328.js","0a74cdcb7c34682fcfda93c34bc39e05"],["oxygen-webhelp/app/nav-links/json/to_guidelines_for_creating_links-d62e645.js","d18718399de6ce6afa45d37cbd57e480"],["oxygen-webhelp/app/nav-links/json/to_learning_dita-d62e1124.js","998f7122658806131e84444d780ec479"],["oxygen-webhelp/app/nav-links/json/to_learning_dita-d62e1131.js","dcd5e9a05d2f21f3ba0977265968062b"],["oxygen-webhelp/app/nav-links/json/to_learning_dita-d62e3688.js","b0f24b0d84a88f612a8e2890bc3b911e"],["oxygen-webhelp/app/nav-links/json/to_oxygen_xml_software_updates-d62e3085.js","5afe26ee2a6561c66212e4b2274a0ccd"],["oxygen-webhelp/app/nav-links/json/to_oxygen_xml_software_updates-d62e3086.js","e702f923ccde0665467e957aee330167"],["oxygen-webhelp/app/nav-links/json/to_oxygen_xml_software_updates-d62e3212.js","9274dcb7b0d9e78e6fc4ad30b5389ad1"],["oxygen-webhelp/app/nav-links/json/to_oxygen_xml_software_updates-d62e5649.js","02b26b147f5c6fa85269d3037c71946b"],["oxygen-webhelp/app/nav-links/json/to_publishing_dita_content-d62e2725.js","8b7038db453728c7be78b3a078f642cf"],["oxygen-webhelp/app/nav-links/json/to_publishing_dita_content-d62e2726.js","21d49e34cd4cdba50585eca4756da255"],["oxygen-webhelp/app/nav-links/json/to_publishing_dita_content-d62e2852.js","d349b42f3102fac2f0581d643b16b027"],["oxygen-webhelp/app/nav-links/json/to_publishing_dita_content-d62e5289.js","bcfd3fb57e3223c2518edad94a68427e"],["oxygen-webhelp/app/nav-links/json/to_technical_writing-d62e2207.js","0000755ca9ba693f126fe6fff5b155f8"],["oxygen-webhelp/app/nav-links/json/to_technical_writing-d62e2888.js","6019d2449db39cc3becbae384d00495b"],["oxygen-webhelp/app/nav-links/json/to_technical_writing-d62e324.js","efabe1dab7d2cd5649d5f6e206672451"],["oxygen-webhelp/app/nav-links/json/to_technical_writing-d62e331.js","5a15e7c8bf0ec944a35167aee861bfda"],["oxygen-webhelp/app/nav-links/json/to_technical_writing-d62e364.js","63b4e4d71faa85c96c79201374af8a34"],["oxygen-webhelp/app/nav-links/menu-loader.js","3de163239f2e6bfe1ff5be5ea095f144"],["oxygen-webhelp/app/nav-links/nav-links.css","5fef0fba2da36f03f4927eff9a481a17"],["oxygen-webhelp/app/nav-links/nav.js","99520983aeec59d97080c53cfc387d30"],["oxygen-webhelp/app/nav-links/toc-loader.js","4646c61378db7113c8e7570934f54541"],["oxygen-webhelp/app/nav-links/tooltip.css","9368c8e3dc2f4fb0504e301306d5771d"],["oxygen-webhelp/app/options/options.js","9baeb1121ee6ba89d8e700607c91676c"],["oxygen-webhelp/app/options/properties.js","da5e3fb81134a940136d579a4e0d76de"],["oxygen-webhelp/app/search-page.css","a13f92f94e304cf89b64e3b89240f1be"],["oxygen-webhelp/app/search-page.js","0be2c5fb124d663fdb2fc2c9e90f3286"],["oxygen-webhelp/app/search/index/htmlFileInfoList.js","d7e72bed41a3790458c83c7c43a328a2"],["oxygen-webhelp/app/search/index/index-1.js","3300964023e489b1a46abafb8a025a13"],["oxygen-webhelp/app/search/index/index-2.js","f618809a10760a12c9ccff68d5a50352"],["oxygen-webhelp/app/search/index/index-3.js","437f9d945b0f324568439a5dbafb270a"],["oxygen-webhelp/app/search/index/index.js","15dff55be7ff623029baa45f86407e22"],["oxygen-webhelp/app/search/index/keywords.js","4dac11b46fffbfa32c8902adb0349954"],["oxygen-webhelp/app/search/index/link-to-parent.js","cb57357a4ce9a429a0f573d906076897"],["oxygen-webhelp/app/search/index/stopwords.js","3ff0aeb231bffce1c69a1a1e6f174476"],["oxygen-webhelp/app/search/nwSearchFnt.LICENSE.txt","2b3226f3a5eec43015e1db57b9274422"],["oxygen-webhelp/app/search/nwSearchFnt.js","54d586602237f73704d07b07d96b0e6b"],["oxygen-webhelp/app/search/search-init.js","d2f3bd2723fc2969622ac74b7a355f57"],["oxygen-webhelp/app/search/search.css","0966d86476d47a899ee300edb06fd325"],["oxygen-webhelp/app/search/search.js","db52d8500fd3b9f930ae5d6539d52927"],["oxygen-webhelp/app/search/searchAutocomplete.js","fb3e5cd386a5a1d0ab25a1fdc454f6c5"],["oxygen-webhelp/app/search/searchHistoryItems.js","7a685a698c4564d2f1689bb482bc0494"],["oxygen-webhelp/app/search/stemmers/de_stemmer.js","06ebff2274bf4c0b4803c6848cb2c5a9"],["oxygen-webhelp/app/search/stemmers/en_stemmer.js","a45fdc2ba7bc5c056d7e8e9fcfe1884e"],["oxygen-webhelp/app/search/stemmers/fr_stemmer.js","71529070b2c6f56039b7b2a16db96365"],["oxygen-webhelp/app/search/stemmers/index.html","d6e1ecfeb967f059ddbf9be7d66bc3ba"],["oxygen-webhelp/app/search/stemmers/stemmer.js","52d0c9b87325cf4181ea15baba2425cb"],["oxygen-webhelp/app/side-notes/p-side-notes.css","4942f636f74c3df1ba9ebee4c4ea89fb"],["oxygen-webhelp/app/template/template-module-loader.js","79ae853710feef086f624b21d75945b7"],["oxygen-webhelp/app/topic-page-basic.css","4524cf3914491b189f53868d6b9a491d"],["oxygen-webhelp/app/topic-page-print.css","0fbad8676950b3eddcf38757a5f2e1d1"],["oxygen-webhelp/app/topic-page.css","57553b3ed8d1e6843f4c56dd7012720a"],["oxygen-webhelp/app/topic-page.js","ba3f7288e1debe091e418d6a6a426347"],["oxygen-webhelp/app/topic/commonltr.css","23a9d8f5f0c75a75c69860a060ed51d1"],["oxygen-webhelp/app/topic/elements-styles.css","5b26207a68b3f7e7dd82431d1c98b23b"],["oxygen-webhelp/app/topic/print.css","4c4ceb5c5d1e55c44900b88d400850b7"],["oxygen-webhelp/app/topic/topic.css","969d963b42483c698139b8c0a838bde4"],["oxygen-webhelp/app/util/parseuri.js","9ff5c72bd502cf67a86cfabd77527cc5"],["oxygen-webhelp/app/util/util.js","f4baf840f9573dede792f84da3f86a17"],["oxygen-webhelp/lib/bootstrap/css/bootstrap.min.css","62907ef14a08ac2199b60610b616d0e5"],["oxygen-webhelp/lib/bootstrap/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["oxygen-webhelp/lib/bootstrap/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["oxygen-webhelp/lib/bootstrap/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["oxygen-webhelp/lib/bootstrap/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["oxygen-webhelp/lib/bootstrap/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["oxygen-webhelp/lib/bootstrap/js/bootstrap.bundle.min.js","31c955e38eb29ac318b0165fadf1ea8c"],["oxygen-webhelp/lib/jquery-bootpag/jquery.bootpag.LICENSE.txt","84af8e422a6ddd69ea6f61dfa5906295"],["oxygen-webhelp/lib/jquery-bootpag/jquery.bootpag.min.js","23e6a33c5b593a6cac1a61bc09d56c5f"],["oxygen-webhelp/lib/jquery-highlight/jquery.highlight-3.js","450654b7d1c279b94678a2ff39989a4f"],["oxygen-webhelp/lib/jquery-ui/jquery-ui.min.css","e9d90155b3f0024ea303d192eb6018e8"],["oxygen-webhelp/lib/jquery-ui/jquery-ui.min.js","545610888a9ee0cff19353e33f9def36"],["oxygen-webhelp/lib/jquery/jquery-3.1.1.min.js","e071abda8fe61194711cfc2ab99fe104"],["oxygen-webhelp/lib/jquery/jquery.MIT-License.txt","ce361034438526e7cbce093bcb175918"],["oxygen-webhelp/lib/maphighlight/jquery.maphilight.min.js","051ea6334023c807457170b2a7f9e630"],["oxygen-webhelp/lib/requirejs/require.js","bebd45d1f406bbe61424136b03e50895"],["oxygen-webhelp/lib/rwdImageMaps/jquery.rwdImageMaps.min.js","af1c51a3e69473347d71b518e81ac5f3"],["oxygen-webhelp/template/oxygen.css","25cac56e182370f23c4b33687e24bb8e"],["oxygen-webhelp/template/resources/fonts/LICENSE.txt","d273d63619c9aeaf15cdaf76422c4f87"],["oxygen-webhelp/template/resources/fonts/Roboto-Bold.ttf","ee7b96fa85d8fdb8c126409326ac2d2b"],["oxygen-webhelp/template/resources/fonts/Roboto-Light.ttf","fc84e998bc29b297ea20321e4c90b6ed"],["oxygen-webhelp/template/resources/fonts/Roboto-Regular.ttf","3e1af3ef546b9e6ecef9f3ba197bf7d2"],["oxygen-webhelp/template/resources/fonts/Roboto-Thin.ttf","89e2666c24d37055bcb60e9d2d9f7e35"],["oxygen-webhelp/template/resources/images/bgr_right.png","bc12253b6e39eddf4e6b70c05bd07a98"],["oxygen-webhelp/template/resources/images/bgr_right_small.png","5a0ca67feeda00ed4693f6e9c7870a7d"],["search.html","a454a873a5d228044a7b25659e28ea18"],["toc.xml","c166006eb675e8f42e3e890db9a37be5"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







