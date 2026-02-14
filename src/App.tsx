
import Counter from "./components/Action";
import KeyProvider from "./components/KeyProvider";

const App = () => {
  return (
    <KeyProvider>
      <Counter />
    </KeyProvider>
  )
}

export default App;
// git branch -M main (to switch over to the main branch.)
// git remote add origin git@github.com:optimisticjuice/giton.git git remote add origin [githuburl]
// git push -u origin main
// git push -u origin main

// git branch -M main (to switch over to the main branch.)
// git remote add origin [githuburl] (git@github.com:[username]/[repository-name].git)
// git push -u origin main (branch main and push to remote are the same (main))

// git branch -M main (to switch over to the main branch.)
// git remote add origin [githuburl] (git@github.com:[username]/[repository-name].git)
// git push -u origin main 

// git branch -M main
// git remote add origin [githuburl]
// git push -u origin main

// git clone [githuburl]

// FINAL : 
// 
// git branch -M main
// git remote add origin [githuburl]
// git push -u origin main