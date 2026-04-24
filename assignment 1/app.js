const e = React.createElement;

function Section(props) {
  return e(
    "section",
    { className: "section-card" },
    e("h2", null, props.title),
    props.children
  );
}

function PersonalInfo() {
  const name = "Ritesh kumar";
  const profession = "Frontend Developer";
  const hobby = "Designing responsive web pages";

  return e(
    Section,
    { title: "Task 1: Display Personal Info with JSX" },
    e("p", null, `Name: ${name}`),
    e("p", null, `Profession: ${profession}`),
    e("p", null, `Hobby: ${hobby}`)
  );
}

function CurrentDateTime() {
  const state = React.useState(new Date());
  const currentDateTime = state[0];
  const setCurrentDateTime = state[1];

  React.useEffect(function () {
    const timer = setInterval(function () {
      setCurrentDateTime(new Date());
    }, 1000);

    return function () {
      clearInterval(timer);
    };
  }, []);

  return e(
    Section,
    { title: "Task 2: Display Current Date & Time" },
    e("p", null, currentDateTime.toLocaleString())
  );
}

function GreetingMessage() {
  const state = React.useState("english");
  const language = state[0];
  const setLanguage = state[1];
  const greeting =
    language === "english" ? "Hello, World!" : "Hola, Mundo!";

  return e(
    Section,
    { title: "Task 3: Dynamic Greeting Message" },
    e("p", null, greeting),
    e("p", null, "Greeting changes based on the value of the language variable."),
    e(
      "button",
      {
        onClick: function () {
          setLanguage(language === "english" ? "spanish" : "english");
        },
      },
      "Switch Language"
    )
  );
}

function StoryTable() {
  const stories = [
    {
      title: "React Basics",
      url: "https://react.dev",
      author: "Ritesh kumar",
      num_comments: 18,
      points: 92,
      objectID: "101",
    },
    {
      title: "Learning JSX",
      url: "https://react.dev/learn/writing-markup-with-jsx",
      author: "Pranjal",
      num_comments: 12,
      points: 76,
      objectID: "102",
    },
    {
      title: "Component Props Guide",
      url: "https://react.dev/learn/passing-props-to-a-component",
      author: "Amar",
      num_comments: 9,
      points: 61,
      objectID: "103",
    },
  ];

  return e(
    Section,
    { title: "Task 4: Display List Using map() in JSX" },
    e(
      "table",
      null,
      e(
        "thead",
        null,
        e(
          "tr",
          null,
          e("th", null, "Title"),
          e("th", null, "URL"),
          e("th", null, "Author"),
          e("th", null, "Comments"),
          e("th", null, "Points"),
          e("th", null, "Object ID")
        )
      ),
      e(
        "tbody",
        null,
        stories.map(function (story) {
          return e(
            "tr",
            { key: story.objectID },
            e("td", null, story.title),
            e(
              "td",
              null,
              e(
                "a",
                {
                  href: story.url,
                  target: "_blank",
                  rel: "noreferrer",
                },
                story.url
              )
            ),
            e("td", null, story.author),
            e("td", null, String(story.num_comments)),
            e("td", null, String(story.points)),
            e("td", null, story.objectID)
          );
        })
      )
    )
  );
}

function UserCard(props) {
  return e(
    "div",
    { className: "user-card" },
    e("h3", null, props.name),
    e("p", null, `Age: ${props.age}`),
    e("p", null, `Email: ${props.email}`)
  );
}

function UserCardSection() {
  const users = [
    { id: 1, name: "Ritesh kumar", age: 22, email: "ritesh.kumar@example.com" },
  ];

  return e(
    Section,
    { title: "Task 5: User Card Component with Props" },
    e(
      "div",
      { className: "user-card-list" },
      users.map(function (user) {
        return e(UserCard, { key: user.id, ...user });
      })
    )
  );
}

function ProductList(props) {
  return e(
    "ul",
    { className: "product-list" },
    props.products.map(function (product) {
      return e(
        "li",
        { key: product.id },
        e("span", null, product.name),
        e("strong", null, `$${product.price}`)
      );
    })
  );
}

function ProductSection() {
  const products = [
    { id: 1, name: "Keyboard", price: 45 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Monitor", price: 180 },
  ];

  return e(
    Section,
    { title: "Task 6: Product List with Parent-Child Components" },
    e(
      "p",
      null,
      "The parent component sends the products array to the child component."
    ),
    e(ProductList, { products: products })
  );
}

function App() {
  return e(
    "main",
    { className: "app" },
    e(
      "header",
      { className: "page-header" },
      e("p", null, "React Based Coding Assignment"),
      e("h1", null, "Assignment 1")
    ),
    e(
      "div",
      { className: "task-grid" },
      e(PersonalInfo),
      e(CurrentDateTime),
      e(GreetingMessage),
      e(StoryTable),
      e(UserCardSection),
      e(ProductSection)
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(e(App));
