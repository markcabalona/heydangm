'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "35dbc44224fd12fb6ff119d5b025e985",
"version.json": "6a2835e60ded5e44baed7640f3361d32",
"index.html": "78b1b800b45d55be2e79043817136e1d",
"/": "78b1b800b45d55be2e79043817136e1d",
"main.dart.js": "34ec2848e28fb544d9f9e421f96d41ca",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "b99191a3ca3474fd7777940998cb3f2a",
"icons/Icon-192.png": "fb50b1b735c2c4428b740a471e4d92fd",
"icons/Icon-maskable-192.png": "fb50b1b735c2c4428b740a471e4d92fd",
"icons/Icon-maskable-512.png": "95487c022deba5b4dd25e48d1ca021ab",
"icons/Icon-512.png": "95487c022deba5b4dd25e48d1ca021ab",
"manifest.json": "2c3452396ca12900fe77f83c0f47c214",
".git/config": "7cfbbec4ecb19f3caacf7033bd69b0c6",
".git/objects/0d/2902135caece481a035652d88970c80e29cc7e": "dfc8c4c4b7d0a1b6dbadc04d9fa6e6f1",
".git/objects/95/118e5ed8ae41aa3c0ecfb82fa49111b7735ee0": "41afa2203982e8c205f0d480bd814a17",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/6f/7b8bb99c78e45d9ce11974e07fc89f082344db": "69663caa4e378a56b73d1660896fea61",
".git/objects/03/237e549796acf96fa275e8d076b39ad68fd609": "7c1389e0d0d976a104afaa395249b253",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/b71549873e66610eb0283d36544dc5f820b6ff": "15eb5068aa9f25b150f32f3ad6156279",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/32/58f80936da982d0f06c0b9d8916eda4f9f9c5c": "48ab43c35f16abd2a7538e71e8b63ebb",
".git/objects/56/53e2c485247a9dc4a1844dd53aeadac75797ab": "7d7378fbe9267dc34a30ffa2da77e38b",
".git/objects/51/5c67e164617c73989c53f5bc2804efcea7d195": "c8c1945971b042d60550effad9497c99",
".git/objects/67/638e46442b3ad6d369b8ff15f5ef8b162a61dc": "2a541d742617d4763aff6711570d6763",
".git/objects/67/ee263d67153bd8f4f1eeb9bba5e8f7e2e4c930": "0747f7d6ceef10e9f57abbbfb752069e",
".git/objects/93/0ce6da1645bb62a6efe155a96cdc252841d3d8": "f177b83d80c52ccb1074188a0a1d4ab7",
".git/objects/5a/96ad6c4aae4d7c9d7eb7d9e1360e8007788dfe": "2163c50b412defeb6e6dd4708da4fe80",
".git/objects/9c/7051e7208034bc0b351108dee4cc033652beab": "8b924e78793bd6d387402a8e7980a514",
".git/objects/a4/e82fde833b33f7cbbcb2b5e6ca2d29260cebce": "f50e9fdc4b7a779c4b68c89fb547e38c",
".git/objects/a3/3e206da0dbce521eb34c1a8569fe644962c8a2": "f1f6815db2695c3ce0456109e9720a7e",
".git/objects/a3/2876ce5706392514719ce9389841a1c30cc0a8": "f82c0e623a4c08795f15be41779c8653",
".git/objects/ad/42b76c0db403921926c3de0a38c862cfaa870a": "ca01fcc7c7e0bace751e19dfb856c08f",
".git/objects/bb/61ad4bd010e3f70d34b4a82114abdb84847246": "195f02696993dbddaf68fc2f709c79c3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/1bfc952cb48b574d4224d692fc20b3afdead0a": "e2fbbc1122112baa5abed2cbdd868e97",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/b3/4b3f4be82694ce3f9395d9b5ffc6e8d65301c5": "41d84f4955204280a946be086ddf3e80",
".git/objects/df/88b99874ce0eb13d8078df01fb377fab79da5d": "7c94bcbef3209177ab07750ff285f058",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/b4/9bdd68184c4046000a9f2f25ae2dddbdcea97a": "c19bc600dc318f58d43e7fd727da0025",
".git/objects/a2/d9230ad4796ba09d7a00f448947d78ffdebdbf": "1ecccf7405ee752cf64c925bcd788da0",
".git/objects/bd/0c5111830767f2a9ca70fe9ca5860d473c79c2": "19f89340e5a99f4f5b929cdddae71e2f",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/a2b8e95f646543df302d45d156c92c7ea192e6": "1a62a5e0bc1f1b6a547479c9ae5c6093",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/d8/d844af3d0e5ad8739cc0c55cf1aa5c1b2c9724": "092f0f72da0940d9b89a40921f5c7fd5",
".git/objects/ab/ea549b33b221458019b5bbd8eab921a893d744": "a7a7c558c0c8d5d9286fbcf753fcd5ed",
".git/objects/f4/3cd2e762b02940b96c9b162f7d9cd26ddf02ea": "dfec5f158d79230dc2593d84c2a67774",
".git/objects/f3/24f118f645a0812462df694718b45f35a028ae": "01a4605a680cb8816eec887aaaaba516",
".git/objects/c7/1c033afdae55b44df5bd9b48ccba4d3278fa86": "5eff225fc3920e5f0be07ab4cadb4998",
".git/objects/c7/0b93e3658d2c8ef40b54530f05494a49884861": "96c6e50a947737d5cf7d20f00e196a78",
".git/objects/ee/b990224fc1437172afcd7d4dfefa8f4c1b756a": "7208687bd155ccfdbe61637a9895d56c",
".git/objects/c9/36fdda376fbacf6231bdb0367b1afa1d23b1e4": "4832a452b2775d837f3e784c488c0756",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/f9a34d04907e175294ec5929f4c6a23e37d842": "de60650ddca04805fd1a904492f32abc",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/18/58ffc1016d76f637e2b8515b26d47f7bc51256": "9b4d54d8d10941b5fc1b301070d5ae6a",
".git/objects/29/43d0345e3cc25a505a13bb4e6d9e748ae1971d": "3ff485c80b55018110173b78df2d6538",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/7c/fb6cb73013eede1ddb622a895f9fa0054e582e": "d6a17bed088ce7dcbea330907bddaed5",
".git/objects/1f/3cf99d59cb90b01182f10610dd2a441d40fe53": "b4a48b5afeac4da06acbcda1b6a5c5b7",
".git/objects/87/7e5661157215cf0ed9ab1809dfdf51c6a49fee": "2ef12b1d9d0fd09fe9ec5d612b6107ee",
".git/objects/87/1cc8f7bd856e51feffe3399ebc979a8431dee0": "f9b60cfa2da0621ee37461930393bd61",
".git/objects/80/bc98b3d058345b44d1a2fdac5d3a13de5c3ef7": "7a6b5cef1c265c1898ee54dfd7e92d2f",
".git/objects/74/8494516a1551aa4a8d76d238fc308791c00243": "4ed65f941e10fb160abfcd11fa5e0c38",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/1a/e9f55ac6f894d4e6110622c7a3a7b3fb42127d": "43df9b4ff2be87b7845087e057799a8f",
".git/objects/17/4d6fb3156e93ae960f47fad48a494c0b2fb076": "b94172f8d718f54fc06f6369163d2120",
".git/objects/26/e6f93f3ab7b07a88f0c334594707a3e67722b5": "21d9d2a437695beaab46642864977479",
".git/objects/21/6f6c078a3b3b7642bc2775b145927352902311": "7f0862077f280b3fcd84a2b00497e365",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/75/dfa9587027d824dca6e62916ee7bd473689d24": "665965ceb7e13c8d2b0740df09a34e12",
".git/objects/86/0ab1d43b358fbffb91eb129a5aaa1a540562d5": "6a6fec2e522c64ebd91f209ea98908bb",
".git/objects/43/ee569f438ab148e460e580e8093793fc21e067": "e6e4ff2a69e232143567f92c716424f8",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/0da0ad56bbadf845ed94f07b03920db441e42a": "ccd968e061b1480a7a10dc76b176bb43",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/359a4abdf9f0079a4b7e0d69d8946477387adc": "dce28bb35fc2da08dc4cbe46fc66ee98",
".git/objects/96/e6cf58710708f7c88e71261406149c5e97d8fb": "329ac12656da2d09287452769baf43e8",
".git/objects/3a/2f40ccd11ee456f4505b08658cf1d3184ef9d0": "13668f7da229204d79b42981835b486d",
".git/objects/98/615d94f488f4e56602d0e708b04663a5aec299": "8b57f277d9a836c5a37742cea6c4759c",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/30/0c3a37191aad393bf6fca3edb94df46a69d60d": "fba15e12b3e13158841eb3c33dcc6699",
".git/objects/30/4f4938b2a3d612ef4e83459450d88aa68c72d8": "62fe346f402f866a9d789bb23e3b0748",
".git/objects/5b/d1e1ddf97d5bef0b0c6199ed20ea91467540f1": "4509f9b25dde641047b80d3eefb421e8",
".git/objects/37/3c5dbb092c750ec7e8ef5229a6ca7ed29754a3": "ae39d0518439a16f6e8e24e2edbd9ec3",
".git/objects/37/a9abb9c5b13ea9c77ac139e499df440f11968d": "9e8ce7eae019b3da1120a3cb049cac18",
".git/objects/06/e3bfa966ac1bd7ca97e7e9df0bcc7ade4ef7fb": "ec1590b2f601350980cae4f7da21c103",
".git/objects/55/feebf96224445b9fe0333853535d0cd82354b1": "55e56d2a0d65ca6c8283a306a1dc47e2",
".git/objects/55/d3a02b3c564904c6fe5e5cec6652739e6dca91": "d40143ec876258d105dd84128350e4d9",
".git/objects/0a/97055fa7bd5a8213c989c9b41359f124b40aec": "2e1ffed6fda15c24083d1af782066d08",
".git/objects/0a/d60fba087ac71c1aacfa91f36e89900aaf0b83": "09885273a1e667a9d08cccccf41e78d8",
".git/objects/64/e0b36a05d326f964a50a58463d06205ae2d0e1": "5bf12c90090f149bd7ff0aec517bd11a",
".git/objects/bf/bb13f9ff413e0df8369f358a9c70dbeaf61162": "6dd47a8043f31b5cff7d00be4e4f9189",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ebd3b4d811ec74396a4706b2041693501f88e8": "34a9ed007bd1da787e2a0471a659c388",
".git/objects/d4/29475558ddd2795337a7601b77592fc5b14123": "2c2c2aca9a3ce97d4c6c03fea7250a3b",
".git/objects/ba/82c59c5036cfa85426d085eb80f561b5c54b41": "da3399dcfb2de99af533108d7ee12f49",
".git/objects/b1/2a483f0ac6345579055b13c9774b58c70e0238": "223ccc5ad9dc0a397a3788856c773a28",
".git/objects/dd/184bebf6e06386b21a1d801bec12b1359baa6d": "20ca92c5eaf573d66c704c5c3cfbebd0",
".git/objects/dd/8e71ec1844a7dbc5995a8ea7186e47780ff38a": "6a22f43a6e2a57ac7a6a169146be0a00",
".git/objects/dc/e2dae069bc73fc644b8868f2b75ec3f10bd496": "99cdfa938eddea99ff820b66911efece",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/03e3b8bec8a222834bc2884134942315816b71": "2a5569a8922687c525184c3671b15608",
".git/objects/db/d3c2359607b01365b9075079365a0413917db8": "8340dff91fb59dff64edf4ca292028ab",
".git/objects/b0/35200d0e1defbf670b7b5f52d956036b5ab4f4": "cd1ae2d9795c2536aaf313bfa704534f",
".git/objects/a1/6c677f0a7b2afbf9d6376426c66e31b1b60ae1": "b29291b4df2d187b95ed56e24f6a4405",
".git/objects/c3/bb06b1976b67ee168c2bdd0354697a34e599cf": "bc15872ccfcebe83adf39a57a1bb670b",
".git/objects/c4/8cf0d5f36f7608b4ce197ecbb60c4cfc6e7cee": "1b10c4a63c70b2cf4344e13bb637bda4",
".git/objects/c4/3f90db60574d7e79e7994ab90e7e8318ccdb31": "ce4c874f3ca92c3be8ca30ebbffd1dad",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ea/df2e5721512c35d3d6a16dab4333394fee19f8": "297b6fbb60478db5874a16e6b7bf65a8",
".git/objects/e1/48cd6d282e066127ef48aca5fbbec0b4e56627": "1320c6fb24edb2c62529be089471ff25",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e6/74c114ae600a40ab62c74a1c65cf712ba1e74c": "f6809f1d9439064cb9024c09de2c8319",
".git/objects/c2/f77d429645128d8771804e0f3dfc65eda8b46f": "5418b292de780c1e147777a1356ae811",
".git/objects/c2/eb4de30ad2084f18575f2d76febcd21b4f3868": "5310ff27a44611b15740f3c1418fc89a",
".git/objects/c2/4cddb809998487cad9b21fb17b649146d09328": "a3c888d9e2d6d70a83276fd313422e12",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/2d/3ee795bb24a742dbb1c67f9b86d1008bac810c": "15b348a800959aca442ee3ae4fef0768",
".git/objects/83/df919b5035ae09d417af56f02daca8f8e3dcc7": "67831e5ba22a154f3aed45e415ec5c0a",
".git/objects/84/8443bb55e3650a3383446bc895ab01414416e2": "101f21b0071eb9ccf61df34b56d151d0",
".git/objects/4a/0cec508c3ff61cf8dbee109a1b6a3f96d17ae0": "c6c27184e601bda9244cf0685842afa9",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/b60373d492b35984f6f5c29738b66ab1de02a6": "4d76611533c0871bbc7c49de80e943da",
".git/objects/15/55c9a1e8540d3e3c2a6ada92978bba5234266e": "b1070e1bd33e69faf48bff5bff49bcf9",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/82/3f0b0cf2667fe7f3fd2e3ec1d9a3d4dd6397a9": "55403f97868775b89e70afd90d9054e3",
".git/objects/82/0346c98c0323e505c7b9f600637ae23c41ecad": "4de0b733340d82edc10a3db2ce810988",
".git/objects/8b/0ed48886f5c2b6901e0925d54545fc36ecefbd": "b27c7a52fe5229c96a1965d25d7d773c",
".git/objects/13/a3fe2ab70e81b0ce61f1473063ca210675c05e": "a38eafc1c4c16873f3d1be5a6a7d2216",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/14/7d35a719732579b3a11df39a4132fc998581b2": "358c9ceb30cbf56a6ed4abbfbc08027d",
".git/objects/22/ee389617c5e99e499047e87e8fa9bb0cdc65df": "7d36b0639b98b9094291522536bc7884",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "52179998a68c260eb1a8bd18a9cf4e50",
".git/logs/refs/heads/main": "52179998a68c260eb1a8bd18a9cf4e50",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e879ca083dad580c19936044f7435967",
".git/index": "edee71327415f18be2b068fac259b3f4",
".git/COMMIT_EDITMSG": "f9c0ba506aba620591c58cc17be0ed39",
"assets/AssetManifest.json": "6741d2506339d4e21cf3df1174a4d1dd",
"assets/NOTICES": "70c308902dbfee0eab59868572155714",
"assets/FontManifest.json": "b7ad6a047b0849bb440c0e1101dc8de6",
"assets/AssetManifest.bin.json": "f6d43a4b11a56588f027cc291599566e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "025b0437d53c3f4fbc7cab9019700f28",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/danica.jpg": "927ff7d2837b03c270ec4c120e4522b7",
"assets/assets/icons/email.png": "f08b1fa193d64ebebfdb6b46aa54df38",
"assets/assets/icons/link.png": "53effe2a6744582215bf35ecd91334a1",
"assets/assets/icons/instagram.png": "b6669988b15ab9241776bf650c387297",
"assets/assets/icons/linked-in.png": "43b6eed2451bd772dbb76f08832c6308",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
