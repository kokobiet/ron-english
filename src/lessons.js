// Starters daily lessons: 5 words + a short reading that uses all 5 words.
// w: word keys (as in vocab.js, lowercase); t: reading; q: [question, options, correctIndex]
const LESSONS_S = [
{w:"cat,dog,bird,fish,pet",vi:"Thú cưng của Ben",t:`Ben has got three pets. He has got a cat, a dog and a bird. The cat is black. The dog is big and brown. The bird is yellow and it can sing.

Ben's sister has got a pet too. It's a small orange fish!`,q:[["How many pets has Ben got?",["two","three","four"],1],["What colour is the bird?",["yellow","black","brown"],0],["Ben's sister has got a fish.",["Yes","No"],0]]},
{w:"cow,chicken,duck,goat,sheep",vi:"Ở nông trại",t:`This is Grandpa's farm. There is a big cow. She is eating grass. There are six chickens and two ducks. The ducks are swimming.

There is a goat with a long beard. And look! There are ten white sheep on the hill.`,q:[["What is the cow doing?",["sleeping","eating grass","swimming"],1],["How many ducks are there?",["two","six","ten"],0],["What colour are the sheep?",["black","brown","white"],2]]},
{w:"horse,donkey,frog,snake,animal",vi:"Con vật Lucy thích",t:`Lucy loves animals. Her favourite animal is the horse. It can run very fast. Her brother likes the donkey because it is funny.

In the garden, Lucy sees a small green frog. "Can you see a snake?" asks her brother. "No!" says Lucy. "I don't like snakes!"`,q:[["What is Lucy's favourite animal?",["the donkey","the horse","the frog"],1],["The frog is green.",["Yes","No"],0],["Lucy likes snakes.",["Yes","No"],1]]},
{w:"elephant,giraffe,monkey,tiger,zoo",vi:"Đi sở thú",t:`Today Tom is at the zoo with his dad. He sees a big grey elephant. It is drinking water. The giraffe is very tall. It is eating leaves.

The monkeys are funny. They are jumping in the trees. The tiger is sleeping. "Shh!" says Dad.`,q:[["Who is at the zoo with Tom?",["his mum","his dad","his sister"],1],["What is the elephant doing?",["drinking water","eating leaves","sleeping"],0],["What is the tiger doing?",["jumping","running","sleeping"],2]]},
{w:"bear,polar bear,crocodile,hippo,zebra",vi:"Những con vật lớn",t:`Kim has a book about big animals. On page one there is a brown bear. On page two there is a polar bear. It is white and it lives in a cold place.

There is a long green crocodile and a fat grey hippo. Kim's favourite is the zebra. It is black and white!`,q:[["What colour is the polar bear?",["brown","white","grey"],1],["What colour is the hippo?",["green","grey","black"],1],["What is Kim's favourite animal?",["the zebra","the bear","the crocodile"],0]]},
{w:"bee,spider,lizard,jellyfish,mouse/mice",vi:"Những con vật nhỏ",t:`Some animals are very small. A bee is small and yellow. It likes flowers. A spider has got eight legs.

Look at the wall! There is a lizard. It is green. In the sea there is a jellyfish. And in the kitchen there are two mice. They want some cheese!`,q:[["How many legs has a spider got?",["six","eight","ten"],1],["Where is the lizard?",["on the wall","in the sea","in the kitchen"],0],["What do the mice want?",["flowers","cheese","water"],1]]},
{w:"tail,sun,sand,sea,shell",vi:"Một ngày ở biển",t:`The sun is hot today. Anna and her dog are at the beach. The sea is blue. Anna is sitting on the sand.

She finds a pink shell. Her dog is very happy. It is moving its tail. Then it runs into the sea!`,q:[["What is the weather like?",["The sun is hot.","It is raining.","It is cold."],0],["What colour is the shell?",["white","pink","blue"],1],["The dog runs into the sea.",["Yes","No"],0]]},
{w:"head,hair,eye,ear,nose",vi:"Bạn người tuyết của tớ",t:`Look at my snowman! He has got a big round head. He hasn't got hair, but he has got a red hat.

His eyes are two black stones. His nose is a long orange carrot. He hasn't got ears. My snowman is very funny!`,q:[["Has the snowman got hair?",["Yes","No"],1],["What is the snowman's nose?",["a stone","a carrot","a banana"],1],["What colour is his hat?",["red","black","orange"],0]]},
{w:"face,mouth,smile,arm,hand",vi:"Bức tranh của May",t:`May is drawing a picture of her mum. She draws a round face and a big mouth. Her mum has got a beautiful smile.

Then May draws two long arms. In one hand, her mum has got a flower. "I love it!" says Mum.`,q:[["Who is May drawing?",["her mum","her dad","her friend"],0],["What has Mum got in her hand?",["a cake","a flower","a book"],1],["Mum likes the picture.",["Yes","No"],0]]},
{w:"leg,foot/feet,body,monster,alien",vi:"Quái vật và người ngoài hành tinh",t:`Sam has got two funny toys. One is a monster. It has got a big green body and four legs. It has got very big feet!

The other toy is an alien. It is blue. It has got one leg and three eyes. Sam likes the alien best.`,q:[["How many legs has the monster got?",["two","three","four"],2],["What colour is the alien?",["green","blue","red"],1],["Which toy does Sam like best?",["the monster","the alien","the robot"],1]]},
{w:"red,blue,yellow,green,colour",vi:"Cầu vồng màu sắc",t:`Grace has got a new box of pencils. "What's your favourite colour?" asks her teacher.

"I like red and yellow," says Grace. She draws a red apple and a yellow sun. Then she draws a blue sea and some green trees. It's a beautiful picture!`,q:[["What does Grace draw with red?",["an apple","the sun","the sea"],0],["What colour are the trees?",["blue","green","yellow"],1],["What colour is the sea?",["blue","red","green"],0]]},
{w:"black,white,brown,grey,pink",vi:"Những chú mèo con",t:`Mrs Brown has got five cats. One cat is black and one cat is white. Two cats are brown.

The small cat is grey. It has got a pink nose. Its name is Smoky. Smoky likes sleeping on Mrs Brown's bed.`,q:[["How many cats are brown?",["one","two","three"],1],["What colour is the small cat?",["grey","black","white"],0],["Where does Smoky like sleeping?",["on the sofa","in the garden","on the bed"],2]]},
{w:"orange,purple,dress,skirt,hat",vi:"Đi dự tiệc",t:`Today is a party. Eva is wearing a purple dress. Her sister Ann is wearing an orange skirt and a white T-shirt.

Their mum has got a big hat. It is purple and orange! "You look beautiful," says Dad.`,q:[["What colour is Eva's dress?",["orange","purple","pink"],1],["Who is wearing a skirt?",["Eva","Ann","Mum"],1],["What colours is Mum's hat?",["purple and orange","red and blue","black and white"],0]]},
{w:"shirt,t-shirt,trousers,jeans,wear",vi:"Quần áo của Tom",t:`On Monday, Tom wears his school clothes: a white shirt and grey trousers.

On Saturday, he doesn't go to school. He wears a blue T-shirt and his old jeans. He likes his jeans. They are his favourite clothes!`,q:[["What does Tom wear on Monday?",["a T-shirt and jeans","a shirt and trousers","a dress"],1],["What colour is his T-shirt?",["white","grey","blue"],2],["Tom likes his jeans.",["Yes","No"],0]]},
{w:"shoe,sock,boots,shorts,jacket",vi:"Trời mưa hay trời nắng?",t:`When it's sunny, Ben wears shorts, a T-shirt and white shoes.

When it's raining, he wears a jacket and his green boots. Today Ben is sad. He can't find one sock! Where is it? It's under the bed!`,q:[["What does Ben wear when it's sunny?",["shorts","a jacket","boots"],0],["What colour are his boots?",["white","green","red"],1],["Where is the sock?",["in the bag","under the bed","on the chair"],1]]},
{w:"bag,handbag,glasses,baseball cap,clothes",vi:"Đi du lịch",t:`Lily's family are going on holiday. Lily puts her clothes in a big bag. Her brother puts his baseball cap in his bag too.

Mum has got a small handbag. "Where are my glasses?" asks Grandma. "They're on your head, Grandma!" laughs Lily.`,q:[["Who has got a small handbag?",["Lily","Mum","Grandma"],1],["Where are Grandma's glasses?",["in the bag","on her head","on the table"],1],["Lily's brother has got a baseball cap.",["Yes","No"],0]]},
{w:"family,mother,father,mum,dad",vi:"Gia đình của Nick",t:`This is Nick's family. His mother's name is Sue. She is a teacher. His father's name is Bill.

Every evening, Nick's mum cooks dinner and his dad reads a story. Nick loves his family very much.`,q:[["What is Nick's mother's name?",["Sue","Bill","Kim"],0],["What does Nick's dad do every evening?",["cooks dinner","reads a story","plays football"],1],["Nick's mother is a teacher.",["Yes","No"],0]]},
{w:"brother,sister,baby,boy,girl",vi:"Em bé mới",t:`Alex is a boy. He is nine. He has got one sister. Her name is Jill. She is a girl of six.

Now there is a new baby in the family! He is very small and he cries a lot. Alex is happy. "Now I've got a brother!"`,q:[["How old is Alex?",["six","eight","nine"],2],["What is his sister's name?",["Jill","May","Ann"],0],["The new baby is a ...",["girl","boy","cat"],1]]},
{w:"grandfather,grandmother,grandma,grandpa,old",vi:"Thăm ông bà",t:`On Sundays, Kim visits her grandfather and grandmother. They are old, but they are very happy.

Grandma makes a big cake. Grandpa and Kim play a board game in the garden. Grandpa always wins!`,q:[["When does Kim visit her grandparents?",["on Mondays","on Saturdays","on Sundays"],2],["What does Grandma make?",["a cake","a pie","a sandwich"],0],["Who always wins the game?",["Kim","Grandpa","Grandma"],1]]},
{w:"cousin,friend,classmate,teacher,kid",vi:"Ở trường",t:`Hugo has got a lot of friends at school. His best friend is Dan. Dan is his classmate.

Hugo's cousin, Matt, is in his class too. Their teacher is Miss Pat. She is very nice. All the kids in the class like her.`,q:[["Who is Hugo's best friend?",["Matt","Dan","Pat"],1],["Who is Hugo's cousin?",["Matt","Dan","Miss Pat"],0],["The kids like their teacher.",["Yes","No"],0]]},
{w:"man/men,woman/women,child/children,person/people,young",vi:"Ở công viên",t:`There are a lot of people in the park today. A man is reading a book. Two women are talking.

Three children are playing with a ball. One young girl is riding a bike. An old man is sleeping under a tree!`,q:[["What is the man doing?",["reading a book","playing football","riding a bike"],0],["How many children are playing with a ball?",["two","three","four"],1],["Who is sleeping?",["a young girl","an old man","a woman"],1]]},
{w:"live,house,home,garden,flower",vi:"Nhà của Jill",t:`Jill lives in a big house. Her home is next to the park. There is a garden in front of the house.

In the garden there are a lot of flowers. Some flowers are red and some are yellow. Jill's mum loves her garden.`,q:[["Where is Jill's home?",["next to the park","next to the sea","next to the zoo"],0],["Where are the flowers?",["in the kitchen","in the garden","in the bedroom"],1],["What colour are the flowers?",["red and yellow","blue and pink","white"],0]]},
{w:"one,two,three,four,five",vi:"Đếm nào!",t:`Let's count! On the table there is one apple and two bananas. There are three cats under the table.

In the garden there are four birds in a tree. And look! There are five ducks on the water. One, two, three, four, five!`,q:[["How many bananas are there?",["one","two","three"],1],["Where are the three cats?",["in the tree","under the table","on the water"],1],["How many ducks are there?",["three","four","five"],2]]},
{w:"six,seven,eight,nine,ten",vi:"Sinh nhật của Matt",t:`Matt is ten today! There are ten candles on his cake. Six friends come to his party.

His mum gives them seven ice creams, but there are eight children! "Oh no!" says Mum. Then she finds nine ice creams in the kitchen. Now everyone is happy!`,q:[["How old is Matt?",["eight","nine","ten"],2],["How many friends come to the party?",["six","seven","eight"],0],["How many ice creams does Mum find in the kitchen?",["seven","eight","nine"],2]]},
{w:"eleven,twelve,thirteen,fourteen,fifteen",vi:"Trận bóng đá",t:`There are eleven players in a football team. Today our team has twelve players: eleven players and one more.

My brother is thirteen and he is our best player. My cousin is fourteen. He kicks the ball fifteen times and gets a goal!`,q:[["How many players are in a football team?",["eleven","twelve","thirteen"],0],["How old is my brother?",["thirteen","fourteen","fifteen"],0],["Who gets a goal?",["my brother","my cousin","me"],1]]},
{w:"sixteen,seventeen,eighteen,nineteen,twenty",vi:"Cửa hàng đồ chơi",t:`In the toy shop there are sixteen balls and seventeen dolls. There are eighteen cars on a long table.

There are nineteen teddy bears and twenty robots! Ben wants a robot. "Can I have one, Dad?" "Yes, it's your birthday!"`,q:[["How many dolls are there?",["sixteen","seventeen","eighteen"],1],["How many robots are there?",["nineteen","twenty","eighteen"],1],["Can Ben have a robot?",["Yes","No"],0]]},
{w:"apple,banana,grape,pear,fruit",vi:"Hoa quả yêu thích",t:`Pat loves fruit. Every day she eats an apple. Her brother likes bananas. He eats two bananas for breakfast!

Their mum likes grapes and their dad likes pears. Pat's dog doesn't like fruit. It likes meat!`,q:[["What does Pat eat every day?",["an apple","a banana","a pear"],0],["Who likes grapes?",["Dad","Mum","Pat"],1],["Pat's dog likes fruit.",["Yes","No"],1]]},
{w:"mango,pineapple,watermelon,coconut,kiwi",vi:"Chợ hoa quả",t:`Sue and her mum are at the market. There is a lot of fruit. Sue sees a yellow mango and a big pineapple.

Mum buys a green watermelon. It is very big! Sue wants a coconut and two small kiwis. "OK," says Mum. "Let's make a fruit salad!"`,q:[["Where are Sue and her mum?",["at the market","at school","at the zoo"],0],["What colour is the watermelon?",["yellow","green","brown"],1],["How many kiwis does Sue want?",["one","two","three"],1]]},
{w:"lemon,lime,lemonade,juice,drink",vi:"Đồ uống mát lạnh",t:`It's very hot today. "Let's make a drink!" says Grandma. She has got three lemons and two limes.

Kim and Grandma make lemonade. Kim's brother doesn't like lemonade. He drinks orange juice. "Mmm! Lemonade is great!" says Kim.`,q:[["How many lemons has Grandma got?",["two","three","four"],1],["What do Kim and Grandma make?",["juice","lemonade","milk"],1],["What does Kim's brother drink?",["orange juice","lemonade","water"],0]]},
{w:"breakfast,egg,bread,milk,eat",vi:"Bữa sáng",t:`It's seven o'clock. It's time for breakfast. Tom eats an egg and some bread. He drinks a big glass of milk.

His sister doesn't eat eggs. She eats bread with chocolate. "Hurry up! It's time for school!" says Mum.`,q:[["What time is it?",["six o'clock","seven o'clock","eight o'clock"],1],["What does Tom drink?",["milk","juice","water"],0],["Tom's sister eats eggs.",["Yes","No"],1]]},
{w:"lunch,rice,meat,meatballs,potato",vi:"Bữa trưa ở trường",t:`At school, Lucy has lunch at twelve o'clock. Today there is rice, meat and some vegetables.

Lucy's friend Nick doesn't like rice. He has meatballs and a big potato. "I'm very hungry!" says Nick. He eats it all!`,q:[["When does Lucy have lunch?",["at ten o'clock","at twelve o'clock","at two o'clock"],1],["Nick likes rice.",["Yes","No"],1],["What does Nick have?",["meatballs and a potato","rice and meat","fish"],0]]},
{w:"dinner,sausage,bean,pea,carrot",vi:"Bữa tối",t:`What's for dinner? Dad is cooking sausages. There are beans and peas too.

May doesn't like peas, but she likes carrots. "Can I have carrots, please?" she asks. "Yes, here you are," says Dad.`,q:[["What is Dad cooking?",["sausages","fish","chicken"],0],["What doesn't May like?",["carrots","peas","sausages"],1],["Does Dad give May carrots?",["Yes","No"],0]]},
{w:"tomato,onion,food,water,burger",vi:"Bánh hamburger tự làm",t:`Dan likes making food. Today he is making a burger. He puts some meat, a tomato and an onion in it.

"Mmm! It's very good!" he says. Then he drinks a glass of water. His favourite food is burgers!`,q:[["What is Dan making?",["a pizza","a burger","a cake"],1],["What does Dan drink?",["juice","milk","water"],2],["What is Dan's favourite food?",["burgers","rice","fish"],0]]},
{w:"chips,fries,ice cream,cake,chocolate",vi:"Món ăn ngon",t:`In England, people say "chips". In America, they say "fries". Alex loves chips with his burger.

His sister Grace likes sweet food. She likes chocolate ice cream and chocolate cake. "Don't eat a lot of chocolate!" says Mum.`,q:[["What do people in America say?",["chips","fries","crisps"],1],["What does Grace like?",["sweet food","chips","eggs"],0],["What flavour is Grace's ice cream?",["lemon","banana","chocolate"],2]]},
{w:"candy,sweets,pie,birthday,balloon",vi:"Tiệc sinh nhật",t:`It's Hugo's birthday party. There are red and blue balloons in the garden. Hugo's mum makes an apple pie.

In England, people say "sweets". In America, they say "candy". Hugo has a big bag of sweets for his friends. Everyone is happy!`,q:[["Where are the balloons?",["in the kitchen","in the garden","in the bedroom"],1],["What does Mum make?",["a cake","an apple pie","a burger"],1],["Who are the sweets for?",["Hugo's friends","Hugo's mum","the dog"],0]]},
{w:"kitchen,table,chair,cupboard,clock",vi:"Trong nhà bếp",t:`This is our kitchen. There is a big table and four chairs. The plates and cups are in the cupboard.

On the wall there is a clock. It's eight o'clock. Mum is in the kitchen. She is making breakfast.`,q:[["How many chairs are there?",["three","four","five"],1],["Where are the plates and cups?",["on the table","in the cupboard","on the chair"],1],["Where is the clock?",["on the wall","on the table","in the cupboard"],0]]},
{w:"bedroom,bed,sleep,lamp,night",vi:"Đi ngủ thôi",t:`It's nine o'clock at night. Ann is in her bedroom. She is in her bed with her teddy bear.

There is a small lamp next to her bed. Mum reads a story. Then she turns off the lamp. "Good night, Ann. Sleep well!"`,q:[["What time is it?",["eight o'clock","nine o'clock","ten o'clock"],1],["What is next to the bed?",["a lamp","a clock","a box"],0],["Who reads a story?",["Dad","Ann","Mum"],2]]},
{w:"bathroom,bath,mirror,mat,rug",vi:"Phòng tắm",t:`Our bathroom is small. There is a white bath and a big mirror. There is a blue mat in front of the bath.

My dog likes the bathroom! He sleeps on the mat. In my bedroom there is a rug, but my dog doesn't like it.`,q:[["What colour is the bath?",["white","blue","pink"],0],["Where does the dog sleep?",["on the rug","on the mat","in the bath"],1],["Is there a rug in the bedroom?",["Yes","No"],0]]},
{w:"living room,sofa,armchair,television,tv",vi:"Phòng khách",t:`In the evening, Bill's family is in the living room. Dad is sitting in the armchair. Bill and his sister are on the sofa.

They are watching TV. "Can I turn off the television, please?" asks Mum. "It's time for bed!"`,q:[["Where is Dad sitting?",["on the sofa","in the armchair","on the floor"],1],["What are the children doing?",["reading","watching TV","sleeping"],1],["Why does Mum want to turn off the TV?",["It's time for bed.","It's time for school.","It's time for lunch."],0]]},
{w:"dining room,hall,door,window,wall",vi:"Ngôi nhà mới",t:`Look at our new house! When you open the front door, you are in the hall. On the left is the dining room. We eat dinner there.

The dining room has got a big window. The walls are yellow. I love our new house!`,q:[["Where are you when you open the front door?",["in the hall","in the kitchen","in the garden"],0],["What do they do in the dining room?",["sleep","eat dinner","watch TV"],1],["What colour are the walls?",["white","green","yellow"],2]]},
{w:"flat,apartment,room,box,paper",vi:"Căn hộ của Eva",t:`Eva lives in a flat in the city. In America, they say "apartment". Eva's flat has got four rooms.

In her room, Eva has got a big box. In the box there is a lot of paper. Eva likes drawing pictures on the paper.`,q:[["Where does Eva live?",["in a house","in a flat","on a farm"],1],["How many rooms are there?",["three","four","five"],1],["What is in the box?",["toys","paper","clothes"],1]]},
{w:"desk,computer,phone,camera,picture",vi:"Bàn học của bố",t:`This is Dad's desk. There is a computer on it. Next to the computer there is a phone.

Dad has got a camera too. He likes taking photos. On the wall above the desk there is a picture of our family.`,q:[["What is on Dad's desk?",["a computer","a TV","a radio"],0],["What does Dad like doing?",["taking photos","drawing","singing"],0],["Where is the family picture?",["on the desk","on the wall","in the box"],1]]},
{w:"bookcase,book,read,story,radio",vi:"Giờ đọc sách",t:`In Sam's bedroom there is a bookcase. There are a lot of books in it.

Sam loves reading. His favourite book is a story about a pirate. In the evening, his grandpa listens to music on the radio and Sam reads his book.`,q:[["Where are the books?",["on the bed","in the bookcase","under the desk"],1],["What is Sam's favourite story about?",["a pirate","a monkey","a robot"],0],["What does Grandpa listen to?",["the radio","a story","the TV"],0]]},
{w:"toy,doll,teddy bear,robot,board game",vi:"Hộp đồ chơi",t:`Look in my toy box! I have got a doll with long hair. I have got a brown teddy bear too.

My favourite toy is my robot. It can walk! On Saturdays, I play a board game with my family. It's very fun!`,q:[["What colour is the teddy bear?",["brown","white","black"],0],["What is my favourite toy?",["the doll","the robot","the teddy bear"],1],["When do I play a board game?",["on Mondays","on Saturdays","on Sundays"],1]]},
{w:"car,bus,lorry,truck,motorbike",vi:"Trên đường phố",t:`Tom is waiting for the bus with his mum. He can see a red car and a blue motorbike.

Then he sees a very big lorry. "In America, they say truck," says Mum. Here comes the bus! It's yellow.`,q:[["What colour is the car?",["red","blue","yellow"],0],["What do people in America say for lorry?",["truck","car","bus"],0],["What colour is the bus?",["blue","yellow","red"],1]]},
{w:"plane,helicopter,ship,boat,train",vi:"Đi bằng gì?",t:`How do you go on holiday? Lucy goes by plane. Her friend Nick goes by train.

Grace lives next to the sea. She goes on a big ship. Her dad has got a small boat too. Ben's uncle can fly a helicopter. Wow!`,q:[["How does Lucy go on holiday?",["by plane","by train","by ship"],0],["Who has got a small boat?",["Lucy's mum","Grace's dad","Ben's uncle"],1],["Who can fly a helicopter?",["Ben's uncle","Nick","Grace"],0]]},
{w:"bike,ride,drive,go,street",vi:"Đi học bằng xe đạp",t:`Alex goes to school by bike. He rides his bike down the street. His bike is green.

His sister can't ride a bike. She is only four! Their dad drives her to school in his car.`,q:[["How does Alex go to school?",["by car","by bike","by bus"],1],["What colour is his bike?",["green","red","blue"],0],["How old is his sister?",["four","five","six"],0]]},
{w:"park,playground,tree,in,on",vi:"Ở công viên",t:`There is a big park next to Kim's house. In the park there is a playground. Kim likes playing there.

Kim's cat is in a tree. It is sitting on a long branch. "Come down, Tiger!" says Kim. But Tiger doesn't want to come down!`,q:[["Where is the playground?",["in the park","in the garden","at school"],0],["Where is the cat?",["in a tree","on the bed","in the house"],0],["What is the cat's name?",["Kim","Tiger","Spot"],1]]},
{w:"under,behind,between,in front of,here",vi:"Trốn tìm",t:`Ben and his friends are playing a game. Ben's sister is under the table. His friend Sam is behind the door.

Anna is between the sofa and the armchair. Matt is in front of the window. "I can see you!" says Ben. "Come here!"`,q:[["Where is Ben's sister?",["under the table","behind the door","in front of the window"],0],["Who is behind the door?",["Anna","Sam","Matt"],1],["Where is Anna?",["between the sofa and the armchair","under the bed","in the garden"],0]]},
{w:"there,shop,store,bookshop,end",vi:"Đi mua sắm",t:`Our street has got a lot of shops. In America, people say "store". There is a toy shop and a bookshop.

The bookshop is at the end of the street. "Let's go there!" says Mum. I want a new book about animals.`,q:[["What do people in America say for shop?",["store","market","bookshop"],0],["Where is the bookshop?",["at the end of the street","next to the park","behind the school"],0],["What book do I want?",["a book about animals","a book about cars","a comic"],0]]},
{w:"ball,kick,football,soccer,game",vi:"Đá bóng",t:`Nick loves football. In America, people call it soccer. Every afternoon, Nick plays in the park with his friends.

Nick can kick the ball very far. Today they are playing a game. Nick's team wins!`,q:[["What do people in America call football?",["soccer","tennis","baseball"],0],["When does Nick play?",["every morning","every afternoon","every evening"],1],["Does Nick's team win?",["Yes","No"],0]]},
{w:"basketball,baseball,bat,bounce,catch",vi:"Bóng rổ và bóng chày",t:`Grace plays basketball. She can bounce the ball and throw it very well.

Her brother plays baseball. In baseball you hit the ball with a bat. Then you run! Grace's brother can catch the ball with one hand.`,q:[["What does Grace play?",["baseball","basketball","football"],1],["What do you hit the ball with in baseball?",["a bat","your hand","your foot"],0],["Grace's brother can catch the ball with one hand.",["Yes","No"],0]]},
{w:"tennis,tennis racket,table tennis,badminton,hockey",vi:"Câu lạc bộ thể thao",t:`At the sports club you can play a lot of sports. Lily plays tennis. She has got a new tennis racket. It's pink!

Her cousins play table tennis and badminton. Her dad plays hockey on Saturdays. What do you play?`,q:[["What does Lily play?",["tennis","hockey","badminton"],0],["What colour is her racket?",["pink","blue","red"],0],["When does Dad play hockey?",["on Saturdays","on Sundays","on Mondays"],0]]},
{w:"run,jump,walk,swim,throw",vi:"Con vật làm được gì?",t:`Animals can do a lot of things. A horse can run very fast. A frog can jump. A fish can swim, but it can't walk!

My dog can't throw a ball, but he can catch it. And I can throw the ball very far!`,q:[["What can a frog do?",["jump","fly","swim fast"],0],["Can a fish walk?",["Yes","No"],1],["Who can throw the ball?",["the dog","I","the horse"],1]]},
{w:"beach,fishing,fly,kite,play",vi:"Cuối tuần ở biển",t:`On Sunday, Dan's family goes to the beach. Dan and his sister play with a kite. It's very windy, so the kite can fly very high.

Dad goes fishing. He catches three big fish! "Fish for dinner tonight!" says Mum.`,q:[["When does the family go to the beach?",["on Saturday","on Sunday","on Monday"],1],["Why can the kite fly high?",["It's windy.","It's sunny.","It's raining."],0],["How many fish does Dad catch?",["two","three","four"],1]]},
{w:"music,song,sing,listen,guitar",vi:"Lớp âm nhạc",t:`On Tuesdays, Sue has a music lesson. Her teacher plays the guitar. The children sing a song about animals.

Sue loves singing. At home, she likes listening to music with her mum. Her favourite song is about the sea.`,q:[["When does Sue have a music lesson?",["on Mondays","on Tuesdays","on Fridays"],1],["What does the teacher play?",["the piano","the guitar","the drums"],1],["What is Sue's favourite song about?",["animals","the sea","the sun"],1]]},
{w:"piano,hobby,favourite,enjoy,sport",vi:"Sở thích của bạn là gì?",t:`Everyone has a hobby. May's hobby is playing the piano. She enjoys it very much.

Her brother doesn't like music. His favourite sport is swimming. He swims every day. What's your hobby?`,q:[["What is May's hobby?",["swimming","playing the piano","drawing"],1],["Does May enjoy it?",["Yes","No"],0],["What is her brother's favourite sport?",["tennis","football","swimming"],2]]},
{w:"draw,drawing,photo,take a photo,skateboard",vi:"Bức vẽ và tấm ảnh",t:`Pat likes drawing. Today she wants to draw her brother on his skateboard. But he moves very fast!

"I can't draw you!" says Pat. "Take a photo," says Mum. Pat takes a photo with Mum's phone. Now she can do her drawing!`,q:[["What is Pat's brother on?",["a bike","a skateboard","a horse"],1],["Why can't Pat draw him?",["He moves very fast.","He is sleeping.","He is at school."],0],["Pat takes a photo with Mum's phone.",["Yes","No"],0]]},
{w:"skateboarding,watch,morning,afternoon,evening",vi:"Một ngày của Jill",t:`In the morning, Jill goes to school. In the afternoon, she goes skateboarding in the park with her friends.

In the evening, she has dinner with her family. Then she watches TV for one hour. After that, she goes to bed.`,q:[["What does Jill do in the morning?",["goes to school","goes skateboarding","watches TV"],0],["Where does Jill go skateboarding?",["in the street","in the park","at school"],1],["How long does Jill watch TV?",["one hour","two hours","three hours"],0]]},
{w:"day,today,year,watch,sun",vi:"Hôm nay là ngày đặc biệt",t:`Today is a special day. It's the first day of the new year! The sun is shining.

Ann's grandpa gives her a new watch. "Now you can see the time every day," he says. "Thank you, Grandpa!" says Ann.`,q:[["What day is today?",["the first day of the new year","Ann's birthday","Sunday"],0],["What does Grandpa give Ann?",["a watch","a book","a doll"],0],["What is the weather like?",["The sun is shining.","It's raining.","It's snowing."],0]]}
];
