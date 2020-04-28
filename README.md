# react-native-horizontal-list

1. install by "npm install --save react-native-horizontal-list"

2. Use this data format to show a list

const listData = [
{
id: 1,
category: "Super Hero",
title: "captain america",
image: require("./assets/images/myimg.jpeg"),
rating: 3.5
},
{
id: 2,
category: "Super Hero",
title: "captain america",
image: { uri: "https://placeimg.com/200/200/any" },
rating: 3.5
},
{
id: 3,
category: "Super Hero",
title: "captain america",
image: { uri: "https://placeimg.com/200/200/any" },
rating: 3.5
},
{
id: 4,
category: "Super Hero",
title: "captain america",
image: { uri: "https://placeimg.com/200/200/any" },
rating: 3.5
},
{
id: 5,
category: "Super Hero",
title:
"captain americacaptain americacaptain americacaptain americacaptain americacaptain america",
image: { uri: "https://placeimg.com/200/200/any" },
rating: 3.5
}
];

3. pass it like <HorizontalList data={listData}/>
