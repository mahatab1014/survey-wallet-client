import { AiOutlineSearch } from "react-icons/ai";
import Container from "../../components/Container/Container";
import SectionBanner from "../../components/SectionBanner/SectionBanner";

const Surveys = () => {
  const categoryList = [
    "Technology",
    "Health and Wellness",
    "Entertainment",
    "Travel",
    "Workplace",
    "Sports",
    "Food and Dining",
    "Social Media",
    "Education",
    "Fashion",
    "Finance",
    "Environment",
    "Politics",
    "Hobbies",
    "Relationships",
    "Pets",
    "Art and Culture",
    "Science",
    "Automotive",
    "Fitness",
    "Music",
    "Movies",
    "Books",
    "Gaming",
    "Home and Garden",
  ];
  const handleFilter = async (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.search_text.value;
    const categoryList = form.category.value;
    const sortBy = form.sort_by.value;
    const show = form.show.value;
    console.log(searchText, categoryList, sortBy, show);
  };

  return (
    <>
      <section>
        <SectionBanner
          heading="Surveys"
          description="Surveys are concise tools for gathering insights through structured questions. Widely used in market research and academia, they capture opinions and preferences from a targeted audience. Whether online or offline, surveys provide essential data to inform decisions, refine strategies, and understand audience dynamics, making them indispensable for informed decision-making."
        />

        <Container>
          <div className="form my-10 py-3 rounded-box bg-gray-100">
            <form
              className="flex justify-center gap-5 flex-wrap"
              onSubmit={handleFilter}
            >
              <div>
                <input
                  className="search-form-field"
                  type="search"
                  name="search_text"
                  id="search_text"
                  placeholder="Search..."
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="category" className="text-sm pr-2">
                  Sort By:
                </label>
                <select
                  className="search-form-field"
                  name="category"
                  id="category"
                >
                  <option selected disabled>
                    Category
                  </option>
                  {categoryList?.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center">
                <select
                  className="search-form-field"
                  name="sort_by"
                  id="sort_by"
                >
                  <option value="asc" selected>
                    Ascending
                  </option>
                  <option value="desc">Descending</option>
                </select>
              </div>
              <div className="flex items-center">
                <label htmlFor="show" className="text-sm pr-2">
                  Show:
                </label>
                <select className="search-form-field" name="show" id="show">
                  <option value="10" selected>
                    10
                  </option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div className="">
                <button className="primary-button !rounded" type="submit">
                  <AiOutlineSearch className="text-2xl" />
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Surveys;
