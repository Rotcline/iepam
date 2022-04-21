defmodule Api.ContentTest do
  use Api.DataCase

  alias Api.Content

  describe "slides" do
    alias Api.Content.Slide

    import Api.ContentFixtures

    @invalid_attrs %{answer1: nil, answer2: nil, answer3: nil, answer4: nil, correct_ans: nil, description: nil, order: nil, question: nil, video: nil}

    test "list_slides/0 returns all slides" do
      slide = slide_fixture()
      assert Content.list_slides() == [slide]
    end

    test "get_slide!/1 returns the slide with given id" do
      slide = slide_fixture()
      assert Content.get_slide!(slide.id) == slide
    end

    test "create_slide/1 with valid data creates a slide" do
      valid_attrs = %{answer1: "some answer1", answer2: "some answer2", answer3: "some answer3", answer4: "some answer4", correct_ans: 42, description: "some description", order: "some order", question: true, video: true}

      assert {:ok, %Slide{} = slide} = Content.create_slide(valid_attrs)
      assert slide.answer1 == "some answer1"
      assert slide.answer2 == "some answer2"
      assert slide.answer3 == "some answer3"
      assert slide.answer4 == "some answer4"
      assert slide.correct_ans == 42
      assert slide.description == "some description"
      assert slide.order == "some order"
      assert slide.question == true
      assert slide.video == true
    end

    test "create_slide/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Content.create_slide(@invalid_attrs)
    end

    test "update_slide/2 with valid data updates the slide" do
      slide = slide_fixture()
      update_attrs = %{answer1: "some updated answer1", answer2: "some updated answer2", answer3: "some updated answer3", answer4: "some updated answer4", correct_ans: 43, description: "some updated description", order: "some updated order", question: false, video: false}

      assert {:ok, %Slide{} = slide} = Content.update_slide(slide, update_attrs)
      assert slide.answer1 == "some updated answer1"
      assert slide.answer2 == "some updated answer2"
      assert slide.answer3 == "some updated answer3"
      assert slide.answer4 == "some updated answer4"
      assert slide.correct_ans == 43
      assert slide.description == "some updated description"
      assert slide.order == "some updated order"
      assert slide.question == false
      assert slide.video == false
    end

    test "update_slide/2 with invalid data returns error changeset" do
      slide = slide_fixture()
      assert {:error, %Ecto.Changeset{}} = Content.update_slide(slide, @invalid_attrs)
      assert slide == Content.get_slide!(slide.id)
    end

    test "delete_slide/1 deletes the slide" do
      slide = slide_fixture()
      assert {:ok, %Slide{}} = Content.delete_slide(slide)
      assert_raise Ecto.NoResultsError, fn -> Content.get_slide!(slide.id) end
    end

    test "change_slide/1 returns a slide changeset" do
      slide = slide_fixture()
      assert %Ecto.Changeset{} = Content.change_slide(slide)
    end
  end
end
