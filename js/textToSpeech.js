/*
@author Julia Jahn
@copyright Julia 
@date 27.01.2020
@version Version: V1.1
@description In this file cordova text to speech is implemented.
*/

/**
 * @description if the with the Id "speakerP1" is clicked  a function will be executed that reads out the string written after "text:". "locale:" sets the language. "rate:" sets the speed rate. 
 */
    $( "#speakerP1" ).bind( "click", function(event, ui) {
        TTS.speak({
        text: 'Choose your topic',
        locale: 'en-GB',
        rate: 0.75
        });
        });

 /**
 * @description if the with the Id "speakerL1P1" is clicked  a function will be executed that reads out the string written after "text:". "locale:" sets the language. "rate:" sets the speed rate. 
 */   
    $( "#speakerL1P1" ).bind( "click", function(event, ui) {
        TTS.speak({
        text: 'What does bread mean',
        locale: 'en-GB',
        rate: 0.75
        });
        });

/**
 * @description if the with the Id "speakerL1P2 is clicked  a function will be executed that reads out the string written after "text:". "locale:" sets the language. "rate:" sets the speed rate. 
 */
    $( "#speakerL1P2" ).bind( "click", function(event, ui) {
        TTS.speak({
        text: 'How do you say I in english',
        locale: 'en-GB',
        rate: 0.75
        });
        });

/**
 * @description if the with the Id "speakerL1P3" is clicked  a function will be executed that reads out the string written after "text:". "locale:" sets the language. "rate:" sets the speed rate. 
 */
    $( "#speakerL1P3" ).bind( "click", function(event, ui) {
        TTS.speak({
        text: 'Click the healthy food',
        locale: 'en-GB',
        rate: 0.75
        });
        });

/**
 * @description if the with the Id "speakerL2P1" is clicked  a function will be executed that reads out the string written after "text:". "locale:" sets the language. "rate:" sets the speed rate. 
 */
    $( "#speakerL2P1" ).bind( "click", function(event, ui) {
        TTS.speak({
        text: 'What colour is that',
        locale: 'en-GB',
        rate: 0.75
        });
        });

/**
 * @description if the with the Id "speakerL2P2" is clicked  a function will be executed that reads out the string written after "text:". "locale:" sets the language. "rate:" sets the speed rate. 
 */
    $( "#speakerL2P2" ).bind( "click", function(event, ui) {
        TTS.speak({
        text: 'What colour is the apple',
        locale: 'en-GB',
        rate: 0.75
        });
        });

/**
 * @description if the with the Id "speakerL2P3" is clicked  a function will be executed that reads out the string written after "text:". "locale:" sets the language. "rate:" sets the speed rate. 
 */
    $( "#speakerL2P3" ).bind( "click", function(event, ui) {
        TTS.speak({
        text: 'Click all things that are yellow',
        locale: 'en-GB',
        rate: 0.75
        });
        });

/**
 * @description if the with the Id "speakerL3P1" is clicked  a function will be executed that reads out the string written after "text:". "locale:" sets the language. "rate:" sets the speed rate. 
 */
    $( "#speakerL3P1" ).bind( "click", function(event, ui) {
        TTS.speak({
        text: 'Click all animals that are grey',
        locale: 'en-GB',
        rate: 0.75
        });
        });

/**
 * @description if the with the Id "speakerL3P2" is clicked  a function will be executed that reads out the string written after "text:". "locale:" sets the language. "rate:" sets the speed rate. 
 */
    $( "#speakerL3P2" ).bind( "click", function(event, ui) {
        TTS.speak({
        text: 'How can you say I own a cat in different words',
        locale: 'en-GB',
        rate: 0.75
        });
        });

/**
 * @description if the with the Id "speakerL3P3" is clicked  a function will be executed that reads out the string written after "text:". "locale:" sets the language. "rate:" sets the speed rate. 
 */
    $( "#speakerL3P3" ).bind( "click", function(event, ui) {
        TTS.speak({
        text: 'What does dog mean',
        locale: 'en-GB',
        rate: 0.75
        });
        });