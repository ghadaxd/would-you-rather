import React from "react";

const questionHeader = (props) => {
  const users = [
    {
      id: "sarahedo",
      name: "Sarah Edo",
      avatarURL: "/assets/smile.svg",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionTwo",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    },
    {
      id: "tylermcginnis",
      name: "Tyler McGinnis",
      avatarURL: "/assets/sunglasses.svg",
      answers: {
        vthrdm985a262al8qx3do: "optionOne",
        xj352vofupe1dqz9emx13r: "optionTwo",
      },
      questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
    },
    {
      id: "johndoe",
      name: "John Doe",
      avatarURL: "/assets/laugh.svg",
      answers: {
        xj352vofupe1dqz9emx13r: "optionOne",
        vthrdm985a262al8qx3do: "optionTwo",
        "6ni6ok3ym7mf1p33lnez": "optionTwo",
      },
      questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    },
  ];
  const { name, avatarURL } = users.find((user) => user.id === props.author);
  // ||
  // this.props.users.find((user) => user.id === authorId)

  return (
    <div className="userContainer pb-2">
      <img
        src={avatarURL}
        alt="User avatar"
        width="52"
        height="52"
        className="mr-3 p-1 userAvatar"
      />
      {name} say:
    </div>
  );
};

export default questionHeader;
