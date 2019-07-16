/** @jsx jsx */

import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'
import styled from '@emotion/styled'
import React from 'react'
import Layout from './layouts/Layout'

const Cell = styled.div`
  border: 1px solid gray;
  /* margin: 1px 1px 1px 1px; */
`
const App: React.FC = () => {
  return (
    <Layout>
      <div>
        <div
          css={css`
            height: 100vh;
          `}
        >
          <div
            css={css`
              height: 100px;
            `}
          >
            123
          </div>
          <div
            css={css`
              display: grid;
              grid-template: repeat(10, 1fr) / repeat(10, 1fr);
              height: calc(100vh - 100px);
            `}
          >
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
            <Cell>4</Cell>
            <Cell>5</Cell>
            <Cell>6</Cell>
            <Cell>7</Cell>
            <Cell>8</Cell>
            <Cell>9</Cell>
            <Cell>10</Cell>
            <Cell>11</Cell>
            <Cell>12</Cell>
            <Cell>13</Cell>
            <Cell>14</Cell>
            <Cell>15</Cell>
            <Cell>16</Cell>
            <Cell>17</Cell>
            <Cell>18</Cell>
            <Cell>19</Cell>
            <Cell>20</Cell>
            <Cell>21</Cell>
            <Cell>22</Cell>
            <Cell>23</Cell>
            <Cell>24</Cell>
            <Cell>25</Cell>
            <Cell>26</Cell>
            <Cell>27</Cell>
            <Cell>28</Cell>
            <Cell>29</Cell>
            <Cell>30</Cell>
            <Cell>31</Cell>
            <Cell>32</Cell>
            <Cell>33</Cell>
            <Cell>34</Cell>
            <Cell>35</Cell>
            <Cell>36</Cell>
            <Cell>37</Cell>
            <Cell>38</Cell>
            <Cell>39</Cell>
            <Cell>40</Cell>
            <Cell>41</Cell>
            <Cell>42</Cell>
            <Cell>43</Cell>
            <Cell>44</Cell>
            <Cell>45</Cell>
            <Cell>46</Cell>
            <Cell>47</Cell>
            <Cell>48</Cell>
            <Cell>49</Cell>
            <Cell>50</Cell>
            <Cell>51</Cell>
            <Cell>52</Cell>
            <Cell>53</Cell>
            <Cell>54</Cell>
            <Cell>55</Cell>
            <Cell>56</Cell>
            <Cell>57</Cell>
            <Cell>58</Cell>
            <Cell>59</Cell>
            <Cell>60</Cell>
            <Cell>61</Cell>
            <Cell>62</Cell>
            <Cell>63</Cell>
            <Cell>64</Cell>
            <Cell>65</Cell>
            <Cell>66</Cell>
            <Cell>67</Cell>
            <Cell>68</Cell>
            <Cell>69</Cell>
            <Cell>70</Cell>
            <Cell>71</Cell>
            <Cell>72</Cell>
            <Cell>73</Cell>
            <Cell>74</Cell>
            <Cell>75</Cell>
            <Cell>76</Cell>
            <Cell>77</Cell>
            <Cell>78</Cell>
            <Cell>79</Cell>
            <Cell>80</Cell>
            <Cell>81</Cell>
            <Cell>82</Cell>
            <Cell>83</Cell>
            <Cell>84</Cell>
            <Cell>85</Cell>
            <Cell>86</Cell>
            <Cell>87</Cell>
            <Cell>88</Cell>
            <Cell>89</Cell>
            <Cell>90</Cell>
            <Cell>91</Cell>
            <Cell>92</Cell>
            <Cell>93</Cell>
            <Cell>94</Cell>
            <Cell>95</Cell>
            <Cell>96</Cell>
            <Cell>97</Cell>
            <Cell>98</Cell>
            <Cell>99</Cell>
            <Cell>100</Cell>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
