# Timetable

I'm trying to figure out the best order for a class schedule so that parents who bring their kids to the studio for multiple classes can spend the least amount of time there. This also needs to take in consideration kids who are in multiple classes, and families that have siblings enrolled in different classes. 

I’m going to use last names in attendance lists to identify classes with repeated enrollment or siblings.

I have four objects that represent classes ordered in an array. Each object has a property “lastName”, with another array of all the students by last name. For now, classes have 3 students each.

As of right now, I’m trying to assign an order with a score based on how close classes with repeated names are to each other. I made up a point system based on proximity. 

If two back to back classes have the same student, it’s worth 3 points. If there is only one class between, that is worth 2 points. If there are two classes between, that’s worth 1 point. 

I made two loops. One to iterate through the ordered objects, and the other to iterate through the students. I want it to check if kid1 in jazz matches any of the students in ballet, then contemp, then hip hop, and then check if  kid2 in jazz matches any students in ballet, contemp, hip hop, and so on. 

The problem is it seems to only be matching and adding a score to the first name in the first object, and not checking any of the other students. So kid1 returns a score of 2 because they have a repeated class close to their first class, but then no one else gets assigned a score. 

When I did it with a simple array with repeating values, the point system worked with the one for loop, but now it does not.

Please help unless all of this is too messy 

thank you!
