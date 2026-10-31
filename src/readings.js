// Daily reading bank. q: [question, options, correctIndex]
const READINGS = [
// ---------- STARTERS ----------
{lv:'S',title:"Sam's pet",vi:"Thú cưng của Sam",text:
`Sam is eight. He has a pet dog. The dog's name is Spot. Spot is brown and white. He has big ears and a long tail.

Every morning, Sam and Spot go to the park. Spot likes running and catching a ball. Sam likes kicking the ball.

Spot doesn't like cats! When he sees a cat, he runs behind Sam. Sam laughs. "You're a funny dog, Spot!"`,
qs:[["How old is Sam?",["seven","eight","nine"],1],["What colour is Spot?",["black and white","brown and white","brown and black"],1],["Where do Sam and Spot go every morning?",["to the zoo","to the beach","to the park"],2],["Spot likes cats.",["Yes","No"],1]]},

{lv:'S',title:"Lunch at the beach",vi:"Bữa trưa ở bãi biển",text:
`It's Sunday. Anna and her family are at the beach. The sun is hot and the sea is blue.

Anna's dad has a big bag. In the bag there are sandwiches, apples, bananas and some lemonade. Anna's brother, Ben, wants an ice cream.

After lunch, Anna and Ben play in the sand. Anna finds a pink shell. "Look, Mum! It's beautiful!" Mum smiles and takes a photo.`,
qs:[["What day is it?",["Saturday","Sunday","Monday"],1],["What does Ben want?",["a burger","a cake","an ice cream"],2],["What colour is the shell?",["pink","white","yellow"],0],["Who takes a photo?",["Dad","Mum","Ben"],1]]},

{lv:'S',title:"My bedroom",vi:"Phòng ngủ của tớ",text:
`Hello! I'm Lucy. This is my bedroom. It's small but I love it.

My bed is next to the window. On my bed there is a big teddy bear. His name is Mr Brown. There is a desk under the window. On my desk there are some books, a computer and a lamp.

I have a box of toys. There are three dolls, a robot and a ball in it. My favourite toy is the robot. It can walk and talk!`,
qs:[["Where is Lucy's bed?",["next to the door","next to the window","under the window"],1],["What is the teddy bear's name?",["Mr Brown","Mr Black","Mr Bear"],0],["How many dolls are in the box?",["two","three","four"],1],["What is Lucy's favourite toy?",["the ball","the doll","the robot"],2]]},

{lv:'S',title:"At the zoo",vi:"Ở sở thú",text:
`Tom and Grace are at the zoo with their grandma. First they see the elephants. The elephants are very big and grey. One baby elephant is drinking water.

Next, they go to see the monkeys. The monkeys are jumping and playing in the trees. One monkey has a banana. Grace laughs.

Tom's favourite animal is the tiger. The tiger is sleeping under a tree. "Shh! Don't wake him!" says Grandma.`,
qs:[["Who is at the zoo with Tom and Grace?",["their grandpa","their grandma","their mum"],1],["What is the baby elephant doing?",["eating","sleeping","drinking water"],2],["What has one monkey got?",["an apple","a banana","a ball"],1],["Tom's favourite animal is the tiger.",["Yes","No"],0]]},

{lv:'S',title:"Kim's birthday",vi:"Sinh nhật của Kim",text:
`Today is Kim's birthday. She is nine. Her friends come to her house for a party.

Kim's mum makes a big chocolate cake. There are nine candles on it. Everyone sings "Happy Birthday!"

Kim's friends give her presents. Alex gives her a kite. Sue gives her a book about horses. Kim loves horses! After the cake, the children play games in the garden.`,
qs:[["How old is Kim?",["eight","nine","ten"],1],["What cake does Mum make?",["a lemon cake","an orange cake","a chocolate cake"],2],["What does Alex give Kim?",["a kite","a book","a doll"],0],["Where do the children play games?",["in the kitchen","in the garden","in the park"],1]]},

{lv:'S',title:"Ben's school bag",vi:"Cặp sách của Ben",text:
`Ben goes to school every day. He has a blue school bag.

What's in Ben's bag? There are two books, a pencil case and a ruler. In the pencil case there are three pencils, an eraser and some crayons. There is a red apple and a bottle of water too.

Ben's teacher is Mrs Green. She is very nice. Ben likes English and music. He doesn't like maths!`,
qs:[["What colour is Ben's bag?",["red","green","blue"],2],["How many pencils are there?",["two","three","four"],1],["What is the teacher's name?",["Mrs Green","Mrs Brown","Mrs White"],0],["Ben likes maths.",["Yes","No"],1]]},

{lv:'S',title:"The farm",vi:"Nông trại",text:
`Nick lives on a farm with his mum and dad. There are lots of animals on the farm.

There are ten cows, five horses and a lot of sheep. There are chickens and ducks too. The ducks swim in the water every morning.

Nick has a donkey. Its name is Happy. Nick gives Happy carrots and apples. After school, Nick rides Happy around the farm.`,
qs:[["Where does Nick live?",["in a flat","on a farm","next to the beach"],1],["How many horses are there?",["five","ten","three"],0],["What is the donkey's name?",["Spot","Happy","Sunny"],1],["What does Nick give the donkey?",["bread and milk","carrots and apples","bananas and grapes"],1]]},

{lv:'S',title:"Breakfast time",vi:"Giờ ăn sáng",text:
`It's seven o'clock in the morning. Dan is in the kitchen with his family.

Dan's sister, May, eats bread and eggs. His dad drinks orange juice and eats rice. Dan doesn't like eggs. He likes bananas and milk.

The cat is in the kitchen too. It wants some fish! "No, Tiger," says Mum. "You can have your breakfast at eight o'clock."`,
qs:[["Where is Dan?",["in the bedroom","in the kitchen","in the garden"],1],["What does May eat?",["bread and eggs","rice and fish","bananas"],0],["Dan likes eggs.",["Yes","No"],1],["What is the cat's name?",["Tiger","Spot","Kitty"],0]]},

{lv:'S',title:"A rainy day",vi:"Một ngày mưa",text:
`Today it's raining. Alice can't play in the park. She is sad.

Her grandpa says, "Let's play a board game!" They sit on the sofa in the living room and play. Grandpa is very good at board games, but Alice wins!

Then Alice draws a picture. In her picture there is a big yellow sun, a blue sky and some flowers. "Now it's sunny!" she says.`,
qs:[["What's the weather like today?",["sunny","raining","snowing"],1],["Who plays a board game with Alice?",["her grandpa","her dad","her brother"],0],["Who wins the game?",["Grandpa","Alice","nobody"],1],["What colour is the sun in the picture?",["orange","red","yellow"],2]]},

{lv:'S',title:"Hugo's toys",vi:"Đồ chơi của Hugo",text:
`Hugo has lots of toys. He has a red car, a big lorry, a train and a helicopter.

His favourite toy is a green monster. It has three eyes and a big mouth. Hugo's little sister, Eva, doesn't like the monster. She likes her dolls and her balloon.

At night, Hugo puts his toys in a big box under his bed. Then he reads a story and goes to sleep.`,
qs:[["What colour is the car?",["red","blue","green"],0],["How many eyes has the monster got?",["two","three","four"],1],["Eva likes the monster.",["Yes","No"],1],["Where does Hugo put his toys at night?",["on the table","in a box under his bed","in the garden"],1]]},

{lv:'S',title:"Sports day",vi:"Ngày hội thể thao",text:
`It's sports day at Pat's school. All the children are in the playground.

Pat can run very fast. She wins the running race! Her friend Bill likes jumping. He can jump very high.

Then the children play football. Pat kicks the ball and... goal! Everyone is happy. After the game, the teacher gives the children some water and oranges.`,
qs:[["Where are the children?",["in the classroom","in the playground","at the beach"],1],["What does Pat win?",["the jumping race","the running race","the swimming race"],1],["What does Bill like?",["running","jumping","swimming"],1],["What does the teacher give the children?",["water and oranges","ice cream","juice and cake"],0]]},

{lv:'S',title:"Jill and the frog",vi:"Jill và chú ếch",text:
`Jill is in her garden. She is looking at the flowers. Then she sees a small green frog under a tree.

"Hello, frog!" says Jill. The frog jumps. Jump! Jump! It jumps on Jill's shoe. Jill laughs.

Jill wants to take the frog to her bedroom, but her mum says, "No, Jill. Frogs live in gardens, next to water." So Jill says "Goodbye!" and the frog jumps away.`,
qs:[["Where is Jill?",["in her bedroom","in her garden","in the park"],1],["What colour is the frog?",["brown","yellow","green"],2],["Where does the frog jump?",["on Jill's hat","on Jill's shoe","on Jill's hand"],1],["Jill takes the frog to her bedroom.",["Yes","No"],1]]},

// ---------- MOVERS ----------
{lv:'M',title:"A trip to the island",vi:"Chuyến đi ra đảo",text:
`Last summer, Jack and his parents went on holiday to an island. They went there by boat. The sea was very blue and Jack saw some dolphins swimming next to the boat!

On the island, they stayed in a small hotel near the beach. Every morning Jack went swimming, and in the afternoons he climbed rocks with his dad.

One day it was very windy and it rained all day. Jack and his mum stayed inside and played cards. In the evening they ate fish and rice at a café. Jack thinks it was his best holiday ever.`,
qs:[["How did Jack's family go to the island?",["by plane","by boat","by bus"],1],["What did Jack see next to the boat?",["sharks","dolphins","whales"],1],["What did Jack do with his dad in the afternoons?",["climbed rocks","went fishing","played football"],0],["What was the weather like on the bad day?",["sunny and hot","windy and rainy","cloudy and cold"],1],["Jack didn't enjoy the holiday.",["True","False"],1]]},

{lv:'M',title:"Daisy is ill",vi:"Daisy bị ốm",text:
`On Monday morning, Daisy didn't want to get up. She had a headache and a sore throat, and she felt very hot.

Her mum looked at her and said, "I think you've got a temperature. You can't go to school today." Mum called the doctor.

The doctor came at ten o'clock. "You've got a bad cold," she said. "Drink lots of water, take this medicine and stay in bed for two days."

Daisy was bored in bed, so her grandmother came and read her some stories. On Wednesday Daisy felt fine again and went back to school.`,
qs:[["What day did Daisy feel ill?",["Monday","Tuesday","Wednesday"],0],["What did the doctor say Daisy had?",["a toothache","a bad cold","a stomach-ache"],1],["How long did Daisy have to stay in bed?",["one day","two days","a week"],1],["Who read stories to Daisy?",["her mum","her grandmother","her teacher"],1],["When did Daisy go back to school?",["on Tuesday","on Wednesday","on Friday"],1]]},

{lv:'M',title:"The new library",vi:"Thư viện mới",text:
`There is a new library in the town centre. It's opposite the supermarket, next to the bus station. Fred went there with his class last Friday.

The library has three floors. Downstairs there are books for children and comfortable seats. On the first floor there are computers, and upstairs there is a café.

Fred chose two books: a comic book about pirates and a book about kangaroos. The librarian said, "You can keep these books for two weeks." Fred wants to go back every Saturday.`,
qs:[["Where is the new library?",["next to the hospital","opposite the supermarket","behind the cinema"],1],["How many floors has the library got?",["two","three","four"],1],["What is on the first floor?",["a café","computers","children's books"],1],["What was Fred's comic book about?",["pirates","kangaroos","clowns"],0],["How long can Fred keep the books?",["one week","two weeks","a month"],1]]},

{lv:'M',title:"Clare's busy week",vi:"Một tuần bận rộn của Clare",text:
`Clare is always busy after school. On Mondays she has swimming lessons at the sports centre. On Tuesdays and Thursdays she practises the piano at home.

On Wednesdays she goes to the park with her best friend, Vicky. They skip and play badminton. Clare is better at badminton than Vicky, but Vicky can skip faster!

On Fridays Clare helps her dad in the kitchen. They cook dinner for the family. Last Friday they made noodle soup. At the weekend, Clare sometimes goes to the cinema, but she never gets up early!`,
qs:[["Where does Clare have swimming lessons?",["at the sports centre","at the beach","at school"],0],["When does Clare practise the piano?",["Mondays and Wednesdays","Tuesdays and Thursdays","Fridays"],1],["Who can skip faster?",["Clare","Vicky","Dad"],1],["What did Clare and her dad make last Friday?",["pasta","pancakes","noodle soup"],2],["Clare always gets up early at the weekend.",["True","False"],1]]},

{lv:'M',title:"The lost kitten",vi:"Chú mèo con bị lạc",text:
`One evening, Peter heard a sad noise in the garden. He went outside with a torch and looked behind the trees. There was a small grey kitten in the grass!

The kitten was hungry and thirsty. Peter gave it some milk in a bowl. Then he made a poster: "Lost kitten! Grey with white feet. Please call 0428 931 506."

The next day, an old woman from the village phoned. "That's my kitten, Smoky!" she said. She came to Peter's house and gave him a big box of chocolates. "Thank you for helping Smoky!" she said.`,
qs:[["When did Peter hear the noise?",["in the morning","in the evening","at lunchtime"],1],["What colour was the kitten?",["black","grey","brown"],1],["What did Peter give the kitten?",["water","milk","fish"],1],["What was the kitten's name?",["Smoky","Spot","Snowy"],0],["What did the woman give Peter?",["some money","a box of chocolates","a book"],1]]},

{lv:'M',title:"At the funfair",vi:"Ở hội chợ vui chơi",text:
`Last Saturday Zoe's uncle took her and her cousin Paul to the funfair. It was a sunny day and there were lots of people.

First they went on the big wheel. From the top, they could see the whole town and the river. Paul was a bit scared, but Zoe loved it!

Then they watched a clown. He was funny and he threw balls into the air. After that, Zoe's uncle bought them some popcorn and a milkshake. At the end of the day Zoe won a teddy bear in a game. She gave it to Paul because he was sad.`,
qs:[["Who took Zoe to the funfair?",["her aunt","her uncle","her dad"],1],["What could they see from the big wheel?",["the sea","the town and the river","the mountains"],1],["Who was scared on the big wheel?",["Zoe","Paul","the uncle"],1],["What did the clown do?",["sang a song","threw balls into the air","rode a bike"],1],["Who got the teddy bear in the end?",["Zoe","Paul","the clown"],1]]},

{lv:'M',title:"A day on the farm",vi:"Một ngày ở nông trại",text:
`Julia's grandparents are farmers. They live in the countryside, far from the city. Last weekend, Julia visited them.

On Saturday morning, Julia helped her grandfather with the animals. They gave food to the cows and the sheep. Then Julia drove the tractor with Grandpa! It was very slow but very loud.

In the afternoon, Julia and her grandmother picked vegetables in the field: carrots, potatoes and onions. In the evening Grandma made a delicious vegetable soup. Julia was very tired, so she went to bed at eight o'clock.`,
qs:[["Where do Julia's grandparents live?",["in the city","in the countryside","on an island"],1],["What did Julia do with her grandfather?",["picked vegetables","drove the tractor","made soup"],1],["The tractor was fast and quiet.",["True","False"],1],["Which vegetables did they NOT pick?",["carrots","tomatoes","onions"],1],["Why did Julia go to bed early?",["She was ill","She was tired","She was sad"],1]]},

{lv:'M',title:"The school concert",vi:"Buổi hòa nhạc ở trường",text:
`Next month there is a concert at Lily's school. Every class must sing a song or play some music. Lily's class wants to dance too.

Lily is learning to play the guitar. She practises every evening after dinner. Her brother Jim plays the drums in a band, so he helps her.

On the day of the concert, Lily was very worried. But when she started to play, she felt happy. All the parents clapped and her mum took lots of photos. After the concert, the head teacher said Lily's class was the best!`,
qs:[["When is the concert?",["next week","next month","next year"],1],["What instrument is Lily learning?",["the piano","the guitar","the drums"],1],["Who helps Lily practise?",["her mum","her teacher","her brother Jim"],2],["How did Lily feel before the concert?",["worried","bored","hungry"],0],["The head teacher said Lily's class was the best.",["True","False"],0]]},

{lv:'M',title:"Snow in the mountains",vi:"Tuyết trên núi",text:
`In winter, Mark and his family went to the mountains. It was very cold and there was lots of snow everywhere.

On the first day, Mark learned to ice skate on a lake. He fell over many times, but he didn't cry. He laughed! His sister Mary was better than him.

The next day it was sunny, so they built a big snowman. They gave him a carrot nose, a scarf and an old hat. In the evening they drank hot chocolate and watched a film. Mark wants to go back to the mountains next year.`,
qs:[["When did Mark's family go to the mountains?",["in summer","in winter","in spring"],1],["Where did Mark learn to ice skate?",["on a lake","at the sports centre","on a river"],0],["Who was better at ice skating?",["Mark","Mary","Dad"],1],["What did they give the snowman for a nose?",["a carrot","a banana","a stone"],0],["What did they do in the evening?",["played cards","watched a film","went skiing"],1]]},

{lv:'M',title:"Sally's dream",vi:"Giấc mơ của Sally",text:
`Last night Sally had a strange dream. She was a pirate on a big ship! Her parrot, Polly, sat on her shoulder and talked all the time.

The ship sailed to an island with a tall waterfall and a dark forest. Sally and Polly found a map under a rock. The map showed a box of gold near the waterfall.

Sally started to dig in the sand... but then she heard a noise. "Sally! Wake up! It's time for school!" It was her mum. Sally was sad because she never found the gold.`,
qs:[["What was Sally in her dream?",["a pirate","a clown","a doctor"],0],["Where did Polly sit?",["on Sally's head","on Sally's shoulder","on the ship"],1],["Where did they find the map?",["in a cave","under a rock","in the forest"],1],["The gold was near the ___.",["waterfall","village","mountain"],0],["Who woke Sally up?",["her dad","Polly","her mum"],2]]},

// ---------- FLYERS ----------
{lv:'F',title:"The museum of dinosaurs",vi:"Bảo tàng khủng long",text:
`Last Thursday, Harry's class went on a school trip to the Natural History Museum in London. They travelled by train, and the journey took about an hour.

The most exciting part of the museum was the room with dinosaurs. Harry saw the bones of a huge dinosaur which lived about seventy million years ago. A guide explained that dinosaurs became extinct, possibly because a giant rock from space hit the Earth.

After lunch, the children visited a room full of insects and butterflies from all over the world. Harry's friend Oliver collected information for a project. Before they left, Harry bought a small model of a dinosaur in the museum shop. He has already put it on the shelf in his bedroom.`,
qs:[["How did the class travel to London?",["by bus","by train","by car"],1],["When did the huge dinosaur live?",["seven million years ago","seventy million years ago","seven hundred years ago"],1],["Why might the dinosaurs have become extinct?",["because of a big storm","because a rock from space hit the Earth","because there was no water"],1],["What did Oliver do?",["bought a model","collected information for a project","took photos of butterflies"],1],["Where is Harry's model now?",["on the shelf in his bedroom","in his school bag","in the museum shop"],0]]},

{lv:'F',title:"Helen wants to be an astronaut",vi:"Helen muốn làm phi hành gia",text:
`Helen is eleven and she has a big dream: she wants to be an astronaut. She has read lots of books about space and planets, and she knows the names of all the planets in the right order.

Last month, Helen's dad took her to a space centre. She saw a real rocket and met an engineer who designs spaceships. "To be an astronaut, you need to study hard, especially maths and science," the engineer said. "You also need to be fit and healthy."

Since that day, Helen has done exercise every morning before school. She goes running in the park and she has joined the school volleyball team. Her favourite subject is science, and her teacher says she might win the science prize this year.`,
qs:[["How old is Helen?",["ten","eleven","twelve"],1],["Where did Helen's dad take her?",["to a museum","to a space centre","to an airport"],1],["Who did Helen meet there?",["an astronaut","a pilot","an engineer"],2],["What has Helen joined?",["the football team","the volleyball team","the chess club"],1],["Helen's teacher thinks she might win the science prize.",["True","False"],0]]},

{lv:'F',title:"A storm at the campsite",vi:"Cơn bão ở khu cắm trại",text:
`In August, William and his family went camping near a lake in the north of the country. They put up their tent next to a small stream, and in the evenings they cooked sausages over a fire.

On the third night, the weather changed. Dark clouds covered the sky and the wind became very strong. At about midnight there was a terrible storm. Rain fell so hard that water started coming into the tent!

William's dad used a flashlight to find a safer place. They carried their sleeping bags and backpacks to the car and slept there until the morning. When the sun came up, they saw that their tent was in the middle of a pond! William said it was the most exciting night of his life.`,
qs:[["Where did William's family go camping?",["near the sea","near a lake","in the desert"],1],["What did they cook over the fire?",["fish","sausages","pancakes"],1],["When did the storm start?",["in the afternoon","at about midnight","early in the morning"],1],["Where did the family sleep after the storm started?",["in the tent","in a hotel","in the car"],2],["What did they see in the morning?",["their tent was in a pond","a rainbow","a big tree on the tent"],0]]},

{lv:'F',title:"The best job in the world",vi:"Công việc tuyệt nhất thế giới",text:
`Katy's mother is a photographer for a famous magazine. Her job is to travel around the world and take photos of wild animals.

Last year she spent three weeks in the desert in Africa. She took photos of camels, lions and eagles. It was extremely hot during the day, but at night it was surprisingly cold. Once, she waited six hours behind a rock to photograph a family of elephants drinking from a river.

Katy thinks her mother has the best job in the world, but it isn't always easy. Sometimes she is away from home for a month, and Katy misses her. When her mum comes back, she always brings Katy a present and tells her amazing stories. Katy would like to be a photographer too, or perhaps a journalist.`,
qs:[["What does Katy's mother photograph?",["famous people","wild animals","buildings"],1],["How long was she in the desert?",["three days","three weeks","three months"],1],["What was the weather like at night in the desert?",["very hot","surprisingly cold","rainy"],1],["How long did she wait behind a rock?",["six hours","two hours","one day"],0],["What would Katy like to be?",["a pilot","a photographer or a journalist","a waiter"],1]]},

{lv:'F',title:"George's invitation",vi:"Lời mời của George",text:
`George found an envelope in the post box. Inside there was an invitation: "Come to Sophia's fancy dress party on Saturday 14th June at 3 p.m. Please wear a costume!"

George didn't know what to wear. His sister Holly suggested a king costume, so they made a crown from gold card and found an old red blanket for a cloak. George also borrowed his grandfather's walking stick.

At the party, Sophia was dressed as a queen and her brother Richard was a police officer. There was a quiz about famous castles, and George won first prize: a big puzzle of a castle. Everyone said George was the best king they had ever seen!`,
qs:[["When was Sophia's party?",["Saturday 4th June","Saturday 14th June","Sunday 14th July"],1],["Who suggested the king costume?",["George's mum","Holly","Sophia"],1],["What was the crown made from?",["gold card","metal","plastic"],0],["What was Richard dressed as?",["a king","a pirate","a police officer"],2],["What prize did George win?",["a crown","a puzzle of a castle","a book"],1]]},

{lv:'F',title:"Saving the pond",vi:"Cứu lấy cái ao",text:
`Near Emma's school there is a small pond. A few years ago it was full of frogs, fish and beautiful swans. But recently people have thrown plastic bottles and rubbish into the water, and most of the creatures have disappeared.

Emma and her classmates decided to do something to help the environment. With their teacher, they started an "Eco Club". Every Saturday morning, members meet at the pond with gloves and bags to collect the rubbish.

They have also made posters for the town: "Keep our pond clean!" The local newspaper wrote a story about them, and a journalist took a photo. Now, after six months, the water is much cleaner, and last week Emma saw a family of ducks swimming there for the first time.`,
qs:[["What was the problem with the pond?",["It was too small","People threw rubbish into it","There was no water"],1],["When do the Eco Club members meet?",["every Saturday morning","every Sunday afternoon","after school every day"],0],["What do they take to the pond?",["fishing nets","gloves and bags","cameras"],1],["Who wrote a story about the club?",["the local newspaper","a magazine","the teacher"],0],["What did Emma see last week?",["swans","frogs","a family of ducks"],2]]},

{lv:'F',title:"A journey by spaceship",vi:"Hành trình bằng tàu vũ trụ",text:
`This is a story that Michael wrote for his English class.

"In the year 2090, I am travelling to Mars by spaceship with three other astronauts. The journey takes seven months. Inside the spaceship, there isn't any air outside the windows, so we can never open them.

Every day we do exercise for two hours, because our bodies get weak in space. We eat special food from packets and drink water through a straw. My favourite meal is pasta with tomato sauce, but it doesn't taste as good as my mum's!

When we arrive, Mars looks like a red desert with huge mountains and deep caves. I put on my space suit, open the exit door and become the first boy to walk on Mars!"`,
qs:[["Where is Michael travelling in his story?",["to the Moon","to Mars","to the Sun"],1],["How long does the journey take?",["seven weeks","seven months","seven years"],1],["Why do the astronauts exercise every day?",["because they are bored","because their bodies get weak in space","because it is fun"],1],["What is Michael's favourite meal?",["pizza","noodle soup","pasta with tomato sauce"],2],["What does Mars look like?",["a blue ocean","a red desert","a green forest"],1]]},

{lv:'F',title:"Betty's first violin concert",vi:"Buổi biểu diễn vi-ô-lông đầu tiên của Betty",text:
`Betty started learning the violin when she was seven. At first, the noise was so terrible that her dog used to hide under the sofa! But Betty practised for half an hour every day, and slowly she got better.

This spring, her music teacher asked her to play in a concert at the town theatre. Betty was excited but also nervous, because she had never played on a stage before.

On the evening of the concert, the theatre was full. When it was Betty's turn, her hands were shaking. Then she saw her grandmother smiling in the front row, and she began to play a beautiful tune. At the end, everyone stood up and clapped for several minutes. Afterwards, the manager of the theatre invited her to play again in the winter festival.`,
qs:[["How old was Betty when she started the violin?",["five","seven","nine"],1],["What did her dog do at first?",["sang","hid under the sofa","ran into the garden"],1],["Where was the concert?",["at school","at the town theatre","in the park"],1],["Who did Betty see in the front row?",["her grandmother","her teacher","her dog"],0],["Who invited her to play at the winter festival?",["the head teacher","the theatre manager","a journalist"],1]]}
];
