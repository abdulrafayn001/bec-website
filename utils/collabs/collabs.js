const inclusiveSociety =
  "https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/179988565_3038452876443183_1513860213683586370_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHJsR_yzCqFx2LXrpHjz95j_hNgXOYX0mL-E2Bc5hfSYkTqe6R2vyn19q0sGKCPHQJBGbBmnSPXf5H14TNd9-Mi&_nc_ohc=VOH0y3DKPLMAX8XHiIx&_nc_ht=scontent.flhe5-1.fna&oh=8418f329fd86918b8bbcc28dedeea745&oe=61C8B170";

const CBS =
  "https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/134161472_2779885278894531_3068277088237772933_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFObsoVqZeFe6ArNwbG65WfOo1WEjaMJXw6jVYSNowlfNWeZ-SKaVp2AzvnydQ7AFQXIgabfF-iYIgwFhhMGC5b&_nc_ohc=rE-t2Ak1h0YAX_wWiEU&_nc_ht=scontent.flhe5-1.fna&oh=319b4ea3d3f82a96ad1016ea2ea0da13&oe=61C8C034";

const takhleeqkar =
  "https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/50049634_772631283113179_5194908793011437568_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHZN1kKRzPXXpMDr0TWZ13l_WKxTmEIJxz9YrFOYQgnHJqx-XB-F-Mwr-eoBjDCKDoUVFVDM7X28x-bDf29qnCa&_nc_ohc=TzRtfwgS3NAAX-qj-cW&_nc_ht=scontent.flhe5-1.fna&oh=2f0ddd3504101f111b320a18ee9b89ac&oe=61CA1030";
export const logos = [
  inclusiveSociety,
  CBS,
  takhleeqkar,
  inclusiveSociety,
  CBS,
  takhleeqkar,
];
export const mediaByIndex = (index) => media[index % media.length];
