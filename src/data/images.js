const images = [
  {
    id: 1,
    image:
      "https://www.superchargednj.com/wp-content/uploads/2023/02/arcade.jpg",
    username: "fajri",
    profileImage:
      "https://media.licdn.com/dms/image/v2/D4D03AQHY5S2UZFBNPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730356755331?e=1738800000&v=beta&t=YeaLtnk5mFUDhSnTF8L6iqDxiKsywUS5rH5U1kvK9nM",
    date: "December 4th, 2024",
  },
  {
    id: 2,
    image:
      "https://kashtaksa.com/wp-content/uploads/2024/05/%D9%83%D8%B4%D8%AA%D8%A9-%D8%A8%D8%B1.png",
    username: "salem8alm",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "November 22nd, 2024",
  },
  {
    id: 3,
    image:
      "https://www.thenationalnews.com/resizer/juMR1sAc5H3rrBHOGaiIGutkvLA=/arc-photo-thenational/eu-central-1-prod/public/WSSM6C53H7PVBD3UOENLKDTBLI.jpg",
    username: "dalhazeem",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "November 15th, 2024",
  },
  {
    id: 4,
    image:
      "https://media.licdn.com/dms/image/D4D12AQEn8fQf3PoU4A/article-cover_image-shrink_720_1280/0/1691753666242?e=2147483647&v=beta&t=_GmmPuRAp1-cQhW4uFKk4810NnqyJYXADk-H5u87Z7o",
    username: "meshal",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "October 30th, 2024",
  },
  {
    id: 5,
    image:
      "https://www.hoteltorredelmar.com/blog/wp-content/uploads/2022/06/mejores-fiestas-ibiza-2022.jpeg",
    username: "yalms",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    date: "October 6th, 2024",
  },
  {
    id: 6,
    image:
      "https://media.gq.com/photos/55e0a8c6f83274863bb01357/16:9/w_2560%2Cc_limit/nyc-heli-story-5.jpg",
    username: "jxnna",
    profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
    date: "August 17th, 2024",
  },
  {
    id: 7,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/037/235/105/small_2x/ai-generated-gym-with-many-equipments-free-photo.jpg",
    username: "osamalb",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "July 30th, 2024",
  },
  {
    id: 8,
    image:
      "https://cdn.verkada.com/f_jpg,w_1200,q_auto:good/f_webp/q_auto/v1675369718/uploads/customers/joe_the_juice.jpg",
    username: "nora",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "June 24th, 2024",
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmItgxGxHDLqay22A_J27DMIhNOznRGepjMQ&s",
    username: "fatmah",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "June 13th, 2024",
  },
  {
    id: 10,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2022-ford-bronco-raptor-116-1642788611.jpg?crop=0.998xw:0.944xh;0.00160xw,0.0565xh&resize=2048:*",
    username: "wahab",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "June 5th, 2024",
  },
  {
    id: 11,
    image:
      "https://www.worldcampus.psu.edu/sites/default/files/2023-01/old-main-wide_2320x1305.jpg",
    username: "mbaqer",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "May 12th, 2024",
  },
  {
    id: 12,
    image:
      "https://www.alhunaiyyan.com/images/i286823014237701110._szw565h2600_.jpg",
    username: "hamad",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "April 24th, 2024",
  },
  {
    id: 13,
    image:
      "https://img.freepik.com/premium-photo/mosque-mountain-lake-uzungol-trabzon-turkey_133187-473.jpg",
    username: "IbrahimAlibrahim",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "April 2nd, 2024",
  },
  {
    id: 14,
    image:
      "https://i.pinimg.com/736x/32/0f/1f/320f1f21e4de2e7323e0d804f557bf6c.jpg",
    username: "sajaa",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "March 26th, 2024",
  },
  {
    id: 15,
    image:
      "https://www.lake.com/wp-content/uploads/2023/11/things-to-do-in-lake-ontario-scaled.jpg",
    username: "abdulrahman",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "February 26th, 2024",
  },
  {
    id: 16,
    image:
      "https://scene7.vailresorts.com/is/image/vailresorts/20230209_VL_Ritter_001:Categories?resMode=sharp2&w=429&h=369&wid=382&fit=constrain,1&dpr=on,2.625",
    username: "abdullah",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    date: "January 28th, 2024",
  },
];

export default images;
