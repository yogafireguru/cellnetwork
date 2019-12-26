import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
import { argonTheme } from "../constants/";
import Icon from 'react-native-vector-icons/MaterialIcons';


const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;




const categories = [
  {
    title: "UNSDG1",
    description:
      "Economic growth must be inclusive to provide sustainable jobs and promote equality.More than 700 million people, or 10% of the world population, still live in extreme poverty. Surviving on less than US$1.90 a day.",
    image:require('../assets/UNSDGGoal1.png'),
    goal: "No Poverty"
  },
  {
    title: "UNSDG2",
    description:
      "The food and agriculture sector offers key solutions for development, and is central for hunger and poverty eradication.An estimated 821 million people were undernourished in 2017.",
    image:require('../assets/UNSDGGoal2.png'),
    goal: "Zero Hunger"
  },
  {
    title: "UNSDG3",
    description:
      "Ensuring healthy lives and promoting the well-being for all at all ages is essential to sustainable development.17,000 fewer children die each day than in 1990, but more than five million children still die before their fifth birthday each year.",
    image:require('../assets/UNSDGGoal3.png'),
    goal: "Good Health And Well Being"
  },
  {
    title: "UNSDG4",
    description:
      "Obtaining a quality education is the foundation to improving people’s lives and sustainable development.Enrolment in primary education in developing countries has reached 91 per cent but 57 million primary age children remain out of school",
    image:require('../assets/UNSDGGoal4.png'),
    goal: "Quality Education"
  },
  {
    title: "UNSDG5",
    description:
      "Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world.Globally, 750 million women and girls were married before the age of 18 and at least 200 million women and girls in 30 countries have undergone FGM. The rates of girls between 15-19 who are subjected to FGM (female genital mutilation) in the 30 countries where the practice is concentrated have dropped from 1 in 2 girls in 2000 to 1 in 3 girls by 2017",
    image:require('../assets/UNSDGGoal5.png'),
    goal: "Gender Equality"
  },
  {
    title: "UNSDG6",
    description:
      "Clean, accessible water for all is an essential part of the world we want to live in.1 in 4 health care facilities lacks basic water services 3 in 10 people lack access to safely managed drinking water services and 6 in 10 people lack access to safely managed sanitation facilities. At least 892 million people continue to practice open defecation. Women and girls are responsible for water collection in 80 per cent of households without access to water on premises",
    image:require('../assets/UNSDGGoal6.png'),
    goal: "Clean Water And Sanitation"
  },
  {
    title: "UNSDG7",
    description:
      "Energy is central to nearly every major challenge and opportunity.13% of the global population still lacks access to modern electricity. 3 billion people rely on wood, coal, charcoal or animal waste for cooking and heating",
    image:require('../assets/UNSDGGoal7.png'),
    goal: "Affordable And Clean Energy"
  },
  {
    title: "UNSDG8",
    description:
      "Sustainable economic growth will require societies to create the conditions that allow people to have quality jobs.The global unemployment rate in 2017 was 5.6%, down from 6.4% in 2000. Globally, 61% of all workers were engaged in informal employment in 2016. Excluding the agricultural sector, 51% of all workers fell into this employment category",
    image:require('../assets/UNSDGGoal8.png'),
    goal: "Decent Work And Economic Growth"
  },
  {
    title: "UNSDG9",
    description:
      "Investments in infrastructure are crucial to achieving sustainable development.Basic infrastructure like roads, information and communication technologies, sanitation, electrical power and water remains scarce in many developing countries 16% of the global population does not have access to mobile broadband networks.",
    image:require('../assets/UNSDGGoal9.png'),
    goal: "Industry, Innovation And Infrastructure"
  },
  {
    title: "UNSDG10",
    description:
      "To reduce inequalities, policies should be universal in principle, paying attention to the needs of disadvantaged and marginalized populations.Evidence from developing countries shows that children in the poorest 20 per cent of the populations are still up to three times more likely to die before their fifth birthday than children in the richest countries.",
    image:require('../assets/UNSDGGoal10.png'),
    goal: "Reduced Inequqlities"
  },
  {
    title: "UNSDG11",
    description:
      "There needs to be a future in which cities provide opportunities for all, with access to basic services, energy, housing, transportation and more.883 million people live in slums today and most them are found in Eastern and South-Eastern Asia.",
    image:require('../assets/UNSDGGoal11.png'),
    goal: "Sustainable Cities And Communities"
  },
  {
    title: "UNSDG12",
    description:
      "Should the global population reach 9.6 billion by 2050, the equivalent of almost three planets could be required to provide the natural resources needed to sustain current lifestyles.",
    image:require('../assets/UNSDGGoal12.png'),
    goal: "Responsible Production and Consumption"
  },
  {
    title: "UNSDG13",
    description:
      "Climate change is a global challenge that affects everyone, everywhere.As of April 2018, 175 parties had ratified the Paris Agreement and 168 parties had communicated their first nationally determined contributions to the UN framework convention on Climate Change Secretariat",
    image:require('../assets/UNSDGGoal13.png'),
    goal: "Climate Action"
  },
  {
    title: "UNSDG14",
    description:
      "Careful management of this essential global resource is a key feature of a sustainable future.Coastal waters are deteriorating due to pollution and eutrophication. Without concerted efforts, coastal eutrophication is expected to increase in 20 percent of large marine ecosystems by 2050",
    image:require('../assets/UNSDGGoal14.png'),
    goal: "Life Below Water"
  },
  {
    title: "UNSDG15",
    description:
      "Sustainably manage forests, combat desertification, halt and reverse land degradation, halt biodiversity loss.Between 2010 and 2015, the world lost 3.3 million hectares of forest areas. Poor rural women depend on common pool resources and are especially affected by their depletion.",
    image:require('../assets/UNSDGGoal15.png'),
    goal: "Life On Land"
  },
  {
    title: "UNSDG16",
    description:
      "Access to justice for all, and building effective, accountable institutions at all levels.Corruption, bribery, theft and tax evasion cost some US $1.26 trillion for developing countries per year; this amount of money could be used to lift those who are living on less than $1.25 a day above $1.25 for at least six years",
    image:require('../assets/UNSDGGoal16.png'),
    goal: "Peace, Justice And Strong Institutions"
  },
  {
    title: "UNSDG17",
    description:
      "Revitalize the global partnership for sustainable development.Official development assistance stood at $146.6 billion in 2017. This represents a decrease of 0.6 per cent in real terms over 2016.",
    image:require('../assets/UNSDGGoal17.png'),
    goal: "Partnerships For The Goals"
  }
];


const solutioncat = [
    {
      title: "Step-1",
      description:
        "The first challenge is lack of awareness about currents state issues and media, politicians and business people not sharing the ground reality. Most of the people when they consume stuff are not aware how that impact the planet. e.g. Baby Diapers take 600 years to biodegrade A normal person don't know the implications of like increase in earth temperature beyond 1.5 degree celsius and how we all are contributing in it. So we lack awareness. Join 66 Days Global Awareness Challenge",
      image:require('../assets/images/cosmos.jpg'),
      goal: "Get Aware"
    },
    {
      title: "Step-2",
      description:
        "Today University and Colleges and Education system is 150 years old and was designed to make people into factory employees. The challenge is that we no longer have people getting trained on skills needed for tackling the issues we face as a generation. Its been outsourced to Industry, Capitalist and Governments which are unable to focus on these issues. Blaming others for our mistakes does not solve the problem.Its need a new Education model. At YogaFire we are open sourcing free Video courses on life Skills. e.g. How to Design Almost Anything, Permaculture, How To Build Sustainable Human Habitat and lot of other courses e.g. Artificial Intelligence & Software Skills absolutely free. We will show you how to build and solve actual problems.",
      image:require('../assets/images/skills.jpg'),
      goal: "Learn The Right Skills"
    },
    {
      title: "Step-3",
      description:
        "Their are so many solutions in the world from facebook to whatsapp to various web sites and local solution but no single holistic solution available to bring people on same platform and discuss world problems. Right now its been segregated in various software solutions. We at YogaFire are building the next generation community platform that is focussed on UN SDG's and solving them holistically and provide free online tools to the community which will be free of cost. So it will be a central respository for all solutions across the planet. We also opening free Fab Lab for people who want to work on UN SDG without any fees.",
      image:require('../assets/images/community.jpg'),
      goal: "Build Online/Offline Community Using Common Digital Tools"
    },
    {
        title: "Final Outcome",
        description:
          "The biggest blocker or what has entered in people mind is that to fix anything you need money. That's not true, but its a lie that has entered in people mind. We are the most evolved species on planet.We are building a cell based circular economy model that generate money and help build a sustainable community. This is how our own Body Cells works. We have named it the Cell Network where each cell is willing to work for another cell wellbeing. If we are conscious we would realise this is very true with our own bodies but not been implemented in the world. We are working on building our first Cell Network to create a sustainable economy powered by digital technology.Again this is based on concept of Giving and not on taking as the Capitalist will tell you. Look Around in Nature, you get air free, water free, soil free. Everthing you have on this planet for your survival was given free to you but why is it Humans just only care about taking more and more. Earth ecosystem works on Giving not on taking. It works on sharing what we have not on just taking that is what a cancer cell does, that is what today's companies are doing where objective is to get bigger and bigger at the cost of destroying the only habitable planet in cosmos",
        image:require('../assets/space-bg.jpg'),
        goal: "The Cell Network"
      }
  ];

class UNSDGScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Problem & Solution',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={'notifications'}
            size={20}
            style={{ color: tintColor }}
          />
        )
      }

  renderProduct = (item, index) => {
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
        onPress={() => navigation.navigate("Pro", { product: item })}
      >
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={item.image}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productPrice}
            >
              {item.goal}
            </Text>
            <Text center size={34}>
              {item.title}
            </Text>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productDescription}
            >
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={32} style={styles.title}>
         Learn All About UN SDG's Or All World Problems
        </Text>
        <Block flex>
         
          <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2
              }}
            >
              {categories &&
                categories.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  };

  renderAlbum = () => {
    return (
        <Block flex style={styles.group}>
          <Text bold size={32} style={styles.title}>
           Learn All About YogaFire Solution Pattern To Solve These Problems Holistically
          </Text>
          <Block flex>
           
            <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
              <ScrollView
                horizontal={true}
                pagingEnabled={true}
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
                contentContainerStyle={{
                  paddingHorizontal: theme.SIZES.BASE / 2
                }}
              >
                {solutioncat &&
                    solutioncat.map((item, index) =>
                    this.renderProduct(item, index)
                  )}
              </ScrollView>
            </Block>
          </Block>
        </Block>
      );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {this.renderCards()}
          {this.renderAlbum()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 40,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE
    // paddingBottom: theme.SIZES.BASE * 2,
  }
});

export default UNSDGScreen;
