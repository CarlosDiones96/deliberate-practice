<?php
$when_it_happened = $_POST['whenithappened'];
$how_long = $_POST['howlong'];
$alien_description = $_POST['description'];
$fang_spotted = $_POST['fangspotted'];
$email = $_POST['email'];

echo 'Thanks for submitting the form.<br>';
echo 'You were abducted ' . $when_it_happened;
echo ' and were gone for ' . $how_long . '<br>';
echo 'Describe them: ' . $alien_description . '<br>';
echo 'Was Fang there? ' . $fang_spotted . '<br>';
echo 'Your email address is ' . $email;

$msg = "$name was abducted $when_it_happened and was gone for $how_long.\n" . 
    "Number of aliens: $how_many\n" . 
    "Alien description: $alien_description\n" . 
    "What they did: $what_they-did\n" . 
    "Fang spotted: $fang_spotted\n" . 
    "Other comments: $other";


mail($to, $subject, $msg);

mail($to, $subject, $msg, 'From: ' . $email);

?>

