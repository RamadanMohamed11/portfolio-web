'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7caea885ba9d24bdf7f85643ccc6d39e",
".git/config": "6e529ccf174017410a7ab89abad17b20",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9c3a7a3a53063625fd999ea326059986",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2e001a656fbf5cb168d2134d2d3e2f5b",
".git/logs/refs/heads/main": "748a96c98a0e0ca7bf18c9734b9ddd04",
".git/logs/refs/remotes/origin/main": "91689cea8b58fc1cab91048646ae1d92",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/f71e6e2c2b3f609fd4c1ae73b084039b98ddc7": "7f76dd31f42396aafaf7b9dfe7220ab7",
".git/objects/07/0c7034237bf6d5facc50e08d0686e16cd7d89f": "ea79a091a925a7a6ecaf86115b3e52d3",
".git/objects/0a/e4d99195f586f5e73365d85beb68cfcfa050a4": "35936973df74e11731c095461165af6a",
".git/objects/11/5431740c7996029a7596d63e5e335f1eab3e67": "eca3544026da2ca7ee71c97510094851",
".git/objects/15/456ad2aa8d8dbd4ca7d213d22245ab7391d720": "23b23568d3176f2fde049829a950f0e3",
".git/objects/18/2ffb1952226e77434553ce1d8f1e738e777cd9": "b0277e9dc36160287a13d2f900c7c350",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/26/7b8a26c05682cf97a4cd994c9a13056cf21787": "68b446d87cf19facaa38059afc461ad7",
".git/objects/27/11bef8ddcc50e02900a281ecada38718bbae17": "dee2f71366b5ace15b71d399f4104542",
".git/objects/27/4e229be1ecec07d0861bc32196071663d1ae96": "a27f341a30c2c053ba1356d2a365ff92",
".git/objects/29/037562b65ec842f226f73c444c73d46d09c8b7": "a7a2518ab35f5dd9122e1d55f44eb34d",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/fa583fba87780dc4b17eb9ecbb163277149415": "f716fbbf34d0301fd8463dfc51102ca2",
".git/objects/2c/36e3be87beef5c63e06fb5235060c7dc31ec83": "6561a4d1e000d21447d7f23149e25c81",
".git/objects/32/deec44af26e43743979835da9eefd2ed245e60": "50a2d2231f65b32b0e46071b77e40c71",
".git/objects/34/85db0859fbd4bbce5ae40d0beb84aeb61362c6": "ff5dcf7356a31b29598d8dc5713839bd",
".git/objects/35/40f44e420be1776b3de5b8ab61b1b9b9e9fd06": "13fb49b4cf30a7a50649d1fc927e74fe",
".git/objects/35/6bdc3db0370085e5751bb38ee9da8af4f73dfb": "d179212ad0c69467207d42495ee189d5",
".git/objects/3f/8e2142e41e701afc8455dd740e734e30640a2f": "dda63be3e45027f05c818c97ca9a2e68",
".git/objects/42/31dd2d1dc8702fb44862dc36e515603b77c53b": "34b5596e6a5d814c1424a4cdb5238b02",
".git/objects/42/b6f0b3d84c74fb3259f42227296afa3e39daa8": "5ab0e5c2540d52bdcc89725bf1476b03",
".git/objects/43/6f05611c4e4054f688f563be3bffdd3885eb0e": "c86db96e99944261e1bc61e7cf0aac1a",
".git/objects/48/d5f40029334df32b722e6d08949ce859623992": "55090cf77fbdfc02b174222b0a830b8b",
".git/objects/49/6d150df1b423921022c20b51e001df635c536d": "9f9f7844c3abfb6edf24fd987a76167e",
".git/objects/4c/4245ff0dbf8eb12e3589fed796ff61f4baf6f5": "96e7fcdb2070ac17d130c5aaece7eda0",
".git/objects/4d/898659b04661bc545b46e00a5e24355a2b5f50": "58d74d532971269e47db498236dfb2ac",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/55/0433932fa0e5dd4f9dd781df72641c95b83779": "bdace4cabd8a7baa9bfbe21d70fa22d9",
".git/objects/5a/ea051dcc54ff0498e70f4a67c20adb10508911": "f8ef225271cae26502f4f162b045b21c",
".git/objects/5a/eee8047d95ee1199bb863991b525eee7dce4f0": "1a42746ecd573ad5cbbfad47f75a30c3",
".git/objects/5d/e0821549e1e6f01e12cb49e5c01f3c6fb25eca": "927ccb6ed405e5031de887378d517b81",
".git/objects/60/888f4e72b95dd7cf22b1527d0c6a92abf2a794": "2862140a7d3fc37d4aaeb2d52e79123b",
".git/objects/60/baf1ac99c8e8cd7a1cbcde31d0fa06a5659dfb": "850f2d305995c9574fc507c028c845b5",
".git/objects/62/74384fefffc99c0704ea6ec1c7a571d8686ce8": "bd4d4ceacae7b583b018420b40198b88",
".git/objects/65/9c80c44f64bd93905088c79243420d69e03450": "0a0be3b593e79b8181e0c4810f171b6c",
".git/objects/67/2486468730b9bc524f74ec878bd1d4c99430fb": "3a42849851c850eda3f0b334d434622d",
".git/objects/69/6d7deedb27e6c62f4f4f27234f9ade35a4a713": "0df7942061c2b7200dbfd301c386dbba",
".git/objects/6b/89f493927cfbb9667ba76d839b6d3567afe504": "80122637c78f54ae3321db9dd0e3f8ee",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/27be3c122add6fbec2a0d8a4ea60f512f7e751": "e2cd2dabb0ac6e84a0a3fda5b63615a1",
".git/objects/6f/e789060a4474981d8fd734f61590e73b276386": "4ed8d90decc0c6017c8db83ab8599263",
".git/objects/70/ea2c6f283e76bac9e4189c289ac3a91cc1181d": "a16d03933753cb12f6f19e057624330e",
".git/objects/75/2b98e2a1a9aab8bdc66d08cdce13e74186ba17": "4ba1b8e465fb9f4f9cd58bc9befdc420",
".git/objects/77/bb11d00f20ddd55ff9a70868324ab185d08c94": "39577097d388ce858273b5a94b9b6fa4",
".git/objects/77/d53c67532f9550109f0ffc4ea9ec604b310648": "bbdf67042f52075ad8fa85cefba54e31",
".git/objects/79/3bbc26bf942a2d7934b8da87453915a5b7eed9": "5dd801426b0bf1f5b139c7d32b3cbe54",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7f/14e3afdd927cf6b10c37efb14f86cb056750d5": "beabae78bbc6d1d53a40c46674eafd26",
".git/objects/7f/8c0e6531deb92efbb7602c5637e243bb00cbe6": "5b1930e61e8f244b59d7fe7016121501",
".git/objects/80/89b8aaee06e69cc2607d4129d3e8fc5c0ca272": "56efaed09bf2655392399c15fb8797a6",
".git/objects/87/ba7ba95b4638176ca1a419c0a69bab0cb5515a": "4e69ee845458fdd4a5af76f3cd40693c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/afb786784776fe4a571deda8515d313d726340": "19bbedd35c9a416f826c70f0b64f5baf",
".git/objects/8a/8b2790ab87d2aec93e2611a3f07720f869b711": "2b431c3684e83b1893738d530773164f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/30b8b77d65ca27275361161e74e1a9ab2276b1": "901e1a06914b1b6bb0cdb46e717b0351",
".git/objects/95/ac9944b395246b4e59b7dd94cedaa5178300ed": "57989f4ae9c730a8a47b297e957f410c",
".git/objects/98/0a6ec501e169ac6158880b97af36838336b06e": "9b5f59f256beeef98444a9c00fbd3da1",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/97eab73e3df15e3c2526bdb929fb248e974834": "49b45856a278d5c3442023fe8350b7eb",
".git/objects/9d/689d237ded40ed66f7188691f2d74fe209ef5c": "2f9d5ef0aa51afdbe17029a42dd63ae5",
".git/objects/9d/e5281d6d99877285abab3195fde73ab37ab1ce": "1313b38b9019fbedcc436325a2503cd0",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/750c10c4b3d84a1e9c2644a318e63b9e9778ad": "8056b756f84e6f9fe8cee19b0f1e3cd4",
".git/objects/9e/a58914bfc1c912cd8fdb0b9c9fc5097f055d93": "d813ae3aa7773655910a5603ea15741e",
".git/objects/a4/84b7041ea734964b557c4ad1a736c98015aa41": "83a84ff1c14e6ed9ef6b40225fb1f0ac",
".git/objects/a6/3a0a43d512fa9d0657424c53259637ee40ceee": "77d1c1205de1676331551e497072954d",
".git/objects/ab/0530b2bc711c770e3acd828e00691f97b2273d": "c7875a7c23c7263d9045c18dc20bb475",
".git/objects/b0/5f1ed97c8d57ce281dfcb163d4f52b31f38b2c": "d2e3c4819e63dfbe7162a4abf2380a87",
".git/objects/b1/eb9a261eb40da24b8f2c2f57dbf737e4b0f6ff": "2397d715a1ce50d5e6fc9845162dd66b",
".git/objects/b4/4504dd8711614ae94d0b15ce0c994ec95ed507": "cf0f923f8b5935e35c5c0a2bcca9c8f2",
".git/objects/b6/553198bba7a242b0567530294364cc164ba41d": "8918eb2e07d5ca603927bd859d7b9260",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6580d77a59833b0e1c95d30d0aae57fdec387c": "aa4618c8dfa7e3d083e1e287897b6df5",
".git/objects/bb/2072572d580cb436f05e2b841c75303d7496cc": "464071695a21b6bc7b9c715fe44c8402",
".git/objects/bc/4d188d9f97783bf4186c7d6162ca14b0cb44ad": "572270897e874858b00eacaeef9ed8e6",
".git/objects/c0/2c20305c1b2f1064110174e6fbdbb8a128850b": "b4fe896b9188dfcb46b5b000d6e5f2b2",
".git/objects/c1/209b6afc5439f65d6a9adcaf8defbc163c6579": "c96794ea391f54e0ffc5f680892d408c",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/f2aefe751c6bd7273f167619031c4cd3791646": "c06ad5db744246c3dcad241edb573321",
".git/objects/c7/61a46b813eaa53a4d2919bb4b0abe335be8768": "1f7e2edd7de3d76a311c000a2ee93529",
".git/objects/c8/2aeeb5a5d7b3aabe59920c8ec96635fcf5d042": "90bab7fe353edeb8315bf6247e49be2f",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/2dd7f6820c9c4a00bc7754f1992d5fb2972155": "d0f4f50fa306488ee652024111a89c30",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/d0/63278372b504fbf22b7507e7fb87648a5b4bfb": "2da8dd63f8fa7176ee7cdf3363ff4a8b",
".git/objects/d0/ae51f0f25ca414182abd0422a3eac9fd67b928": "ab1b631583edf67812bb31e109cd2240",
".git/objects/d1/41aec260f38e4a036d9c5d467d97060a940d64": "9eeb82cb86ce2550787dcd76db232a30",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/de/cbfa6620380145f6770bf04b4c79c800a4b764": "f0cbbdf07d8a0aa571dba1a20a90e4e6",
".git/objects/df/2f9b8716aa3e25794133ffdcb7bd505ddb14bc": "1fab0aa135d97c696a0037b6a00bef01",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/3beb3e09bb975ee311f5c74cfa357ee950f22e": "8ffc54a491ae02737184f1b6356e7fd7",
".git/objects/e7/1c5368549e5f748e57f5bfba9aae94a4860e43": "8589642819d16db71d95e43bccc2e4e3",
".git/objects/e7/def95d3f44c82086f6e74d93fc0aadac7c454a": "28a34a73fd3e94b3fd53733dfaf2ed0e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/dcab58ce35b1ee5718422a45cdf17c5cb36f93": "6648c91aba4b21a2024bc0bf97fca3f2",
".git/objects/eb/2da7b02187b9aa474d29dba459ff9f49fc74f9": "c131b2938c1798243f85e727d9322ad4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bf4c90196a89f0b9d2d6c3af69055c079309d3": "5eb5c4bb22de88b790aa7232e8bfe99b",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/4f5ad439b96ad1fba5084943c84ee093571c06": "ae089bbba3211167384557af208fb093",
".git/objects/f0/4014d85dd67fa2acd5c248f523b75b516fff07": "0b1c03432b27119761718a6b97cd6583",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/b6944f48b54da823e5fd648c33f2280ed5915b": "4da4c19592f552e54a9b0de84309abb1",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/afd292c23eade9411f41add8263ea9fa00cad8": "3c81e287af6ec4af5ff2cd397544be98",
".git/refs/heads/main": "32f055381ded221802ab786b5812941c",
".git/refs/remotes/origin/main": "32f055381ded221802ab786b5812941c",
"assets/AssetManifest.bin": "6040b20e53e9d3ec1ec6135d8a33f3fd",
"assets/AssetManifest.bin.json": "4fbe4b654ed1830125caea7266c20802",
"assets/AssetManifest.json": "284e8667fc83ecf44ad3ab18a701e00d",
"assets/assets/fonts/Caveat-VariableFont_wght.ttf": "9bd9bde59dc816ef93cd18069b65a40e",
"assets/assets/fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/images/1.png": "c875358f91cfa0319bf80ab6c212a9dd",
"assets/assets/images/2.png": "4bc63b9b1b543c7a369c9f973c602292",
"assets/assets/images/api.png": "aae3c3e996429f75822920bfc409066b",
"assets/assets/images/arduino.png": "4c4cace83f5c52ba43f58b8094ffb619",
"assets/assets/images/c++.png": "099f7194278240dd433783d9b1f01ca8",
"assets/assets/images/c.png": "11396a41fce307b10316e942e62d2d39",
"assets/assets/images/dart.png": "5c41ab012254b60643ed0c724f6251b4",
"assets/assets/images/Elec.png": "d9d6a790fda146c97761a9c43301d1d4",
"assets/assets/images/Embedded.png": "1494a2119d786147f10c07c688d2dcb3",
"assets/assets/images/facebook.png": "3e14fc01cee6afca1367e9c9be778deb",
"assets/assets/images/firebase.png": "9ed79d8d77f3aab27b935896f7258479",
"assets/assets/images/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/images/Git&GitHub.png": "849deb4e4ab091f96674247727310174",
"assets/assets/images/gmail.png": "61b5993283201dfa52a3fb6ffe235476",
"assets/assets/images/IMG_20211227_100504_auto_x2.jpg": "a85dab29ae6d5047d37a57f3f080b842",
"assets/assets/images/IMG_20230610_225906.png": "765a4cfc3a8a5c78f8968a6195f1dcb3",
"assets/assets/images/linked.png": "6804056d637e3eba6488cbd7aeca53aa",
"assets/assets/images/postman.png": "73bb49edb42db9daf6cb32614e970ef4",
"assets/assets/images/problem.png": "986e2d756e963f5d4f41496ee4b4b115",
"assets/assets/images/projects/Calculator.jpg": "3248e9904b855a25516d4e0cf9671dfe",
"assets/assets/images/projects/Meal.jpg": "162e2697b06f5d6d3fa613e2387a4f45",
"assets/assets/images/projects/News.jpg": "243fab15f719d6429000df89e7a3f644",
"assets/assets/images/projects/Notes.jpg": "760b0c4c71e277d3feeae5130cf5d0f4",
"assets/assets/images/projects/Portfolio.jpg": "8e5f098b5bd9e1845f65b78d403e74f1",
"assets/assets/images/projects/Slogan.jpg": "a664f918f90deeb7c53f29c93c5cc27a",
"assets/assets/images/projects/Student_Attendance.jpg": "96c009ee97db4bcc952da6fff216727d",
"assets/assets/images/projects/Tasbih.jpg": "e0dd44ffee9e9187f99ad6ebf08c1ecc",
"assets/assets/images/projects/Weather.jpg": "5301ede4929d19aa8ece18a8e6383a9a",
"assets/assets/images/projects/XO_Game.jpg": "6473a87d70a6da23c9165cac069017cb",
"assets/assets/images/python.png": "6841951dd3623f17a3f6a880c3f4f0a0",
"assets/assets/images/Rasberry.png": "e9e1419d4bc7ff96f55b79a3d98b70bb",
"assets/assets/images/ROS.png": "cf2bc536c888775876cf1b0d621936ef",
"assets/assets/images/s.png": "23ba24ebe385494684dd186d4d609bd9",
"assets/assets/images/telegram.png": "941d4b0871d0cc6275ffb83434be8486",
"assets/assets/images/whatsapp.png": "48ab57a21dc5d792092e7a4a97324ec0",
"assets/assets/Ramadan_Mohamed_CV.pdf": "f81df6d0df0fc951790b12280414888e",
"assets/FontManifest.json": "c3eeb0667f3316f806d70df15b20fd75",
"assets/fonts/MaterialIcons-Regular.otf": "27c21a06cb4e7f19e1948d1facb879fe",
"assets/NOTICES": "a250687be4f821bfe25643249ae40f04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/Ramadan_Mohamed_CV.pdf": "f81df6d0df0fc951790b12280414888e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "91230df427baa73a29fbf11616a485b7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6b2eb6c1b58079d5cfd0bcce2d614cae",
"/": "6b2eb6c1b58079d5cfd0bcce2d614cae",
"main.dart.js": "7ebcbe165d01605312f27ef01db87743",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"README.md": "74057a4573af3a196bc1b5ed0031e061",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
