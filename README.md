1.What is JSX, and why is it used?
	 Answer:JSX হলো Javascript xml যেটা  একটা syntax এক্সটেনশন এটা আমাদেরকে
	 Javascript (React er) এর ভিতরে HTNLকোড লিখতে অনুমতি দেয় Reusable কোড smoth code
	 এবং ক্লিন কোড লিখতে এটা অনেক সাহায্য করে. আর এ কারণেই আমরা JSX ব্যবহার করি।
	
2.What is the difference between State and Props?
	 Answer: Props সাধারণত একটি কম্পনেন্ট থেকে আরেকটি কম্পনেন্ট এর ভিতরে ডাটার সম্পর্ক তৈরি
	 করতে ব্যবহার করা হয়। Props দিয়ে প্যারেন্ট কম্পনেন্ট থেকে শুধু চাইল্ড কোম্পানিতে ডাটা পাঠানো যায় এবং এটা অপরিবর্তনশীল। 
	 আর অন্যদিকে state এমন একটি জিনিস যা সময়ের সাথে সাথে ডাটা পরিবর্তন করে এবং এটা কম্পনেন্ট এর ভিতরেই ভিতরে ডাটা কে পরিবর্তন করে দেয় বিভিন্ন ধরনের ডাটা কে ম্যানেজ করার জন্য আমরা স্টেট ব্যবহার করে থাকি।
	 
	
3.What is the useState hook, and how does it work?
	 Answer:useState  হল রিয়াক্ট এর এমন একটি Hook যেটা কম্পনেন্ট এর ভিতর variable এর ডাটা store করে এবং প্রয়োজন অনুসারেvariable এর মান পরিবর্তন করে দেয়। এটা কাজ করার জন্য updated function / setFunction এর ভিতরে মান দিলে। current মান পরিবর্তন হয়। state change হওয়ার সাথে সাথে কম্পোনেন্ট আবারও রিরেন্ডার হয় এবং একটি কম্পনেন্ট এর ভিতর একাধিক state নেওয়া যায়। 
	  
	  
4.How can you share state between components in React?
	 Answer: একটি কম্পোনেন্ট থেকে আরেকটি কম্পোনেন্ট এর ভিতরে state শেয়ার করতে গেলে Lifting State Up পদ্ধতি ব্যবহার করা হয়। এটা করতে গেলে সাধারণত কমন একটি parent কম্পোনেন্ট ডাটা রেখে সকল child কম্পোনেন্ট এর ভিতর props আকারে পাঠাতে হয়। এভাবেই মূলত একটি কম্পোনেন্ট থেকে আরেকটি কম্পোনেন্ট state share করা যাই।
	
5.How is event handling done in React?
	Answer: সাধারণত Function declar করে react ইভেন্ট হ্যান্ডেল করা হয়। ইউজার যখন কোথাও ক্লিক করে অথবা রিঅ্যাক্ট করে। তখন React এর Build-in handler ব্যবহার করে সেই ফাংশন কে কল করা হয়। আর এভাবেই ইভেন্ট হ্যান্ডেলিং করা হয় ।
