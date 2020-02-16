import React from "react";
import styled from "styled-components";

///////////////////////////////////////////////////////////////////////////////////////////////

const IntroWrap = styled.section`
    position: relative;
    margin-top: 128px !important;
    margin: 0 auto;
    width: 984px;
    overflow: auto;
    font-family: "Gothic A1", sans-serif;
    transition: all 0.56s ease;

    @media screen and (max-width: 1024px) {
        width: 94vw;
    }
`;

const AboutTab = styled.div`
    position: relative;
    box-sizing: border-box;
    margin-bottom: 40px;
    padding: 8px;
    width: 120px;
    height: 40px;
    background: #eee;

    color: #2b2b2b;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    user-select: none;
    transition: all 0.32s ease;

    .CodeTag {
        color: #e58e26;
        font-weight: 700;
        margin-right: 4px;
    }

    &:hover {
        background: #e4e4e4;
    }
    &:active {
        background: #ddd;
    }
`;

const AboutLine = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    padding: 8px;
    background: transparent;
    z-index: 100

    color: #2b2b2b;
    line-height: 16px;
    font-weight: 400;
    user-select: none;
    transition: all 0.32s ease;

    &:hover,
    &:active {
        background: rgba(238, 238, 238, 0.64);
    }
    &:nth-child(78) {
        background: #e4e4e4;
        margin-bottom: 64px;
    }

    @media screen and (max-width: 320px) {
        font-size: 10px;
        letter-spacing: -0.48px;
    }
    @media screen and (min-width: 321px) and (max-width: 389px) {
        font-size: 11px;
        letter-spacing: -0.48px;
    }
    @media screen and (min-width: 390px) and (max-width: 559px) {
        font-size: 12px;
        letter-spacing: -0.32px;
    }
    @media screen and (min-width: 560px) {
        font-size: 14px;
    }
`;

const LineNumber = styled.span`
    color: #4b4b4b;
    font-weight: 700;
    margin: 0px 16px;
    text-align: center;
    width: 16px;
    display: inline-block;
    @media screen and (max-width: 559px) {
        margin: 0px !important;
    }
`;

const Method = styled.span`
    color: #fa983a;
    font-weight: 700;
`;

const PropsName = styled.span`
    color: #079992;
    font-weight: 400;
`;

const Remark = styled.span`
    color: #7b7b7b;
    font-weight: 400;
`;

const String = styled.span`
    color: #60a3bc;
    font-weight: 700;
`;

const Return = styled.span`
    color: #b71540;
    font-weight: 400;
`;

const AboutFinish = styled.span`
    animation: Twinkle 1s linear infinite;

    @keyframes Twinkle {
        from {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const IntroCole = props => {
    return (
        <>
            <IntroWrap
                style={{
                    opacity: props.opacity
                }}
            >
                <AboutTab>
                    <span className="CodeTag">JS</span> About.js{" "}
                </AboutTab>

                <AboutLine>
                    <LineNumber>1</LineNumber>
                </AboutLine>

                <AboutLine>
                    <LineNumber>2</LineNumber> <Method>class</Method>{" "}
                    <PropsName>Introduction</PropsName> <Method>extends</Method>{" "}
                    <PropsName>Junsu Kim</PropsName>﹛
                </AboutLine>

                <AboutLine>
                    <LineNumber>3</LineNumber>{" "}
                    <Remark>
                        ∕∕ Usually, I’ am called <b>Cole Kim</b> outside of
                        Korea.
                    </Remark>
                </AboutLine>

                <AboutLine>
                    <LineNumber>4</LineNumber>{" "}
                    <Remark>∕∕ I'm ambitious and love new challenges.</Remark>
                </AboutLine>
                <AboutLine>
                    <LineNumber>5</LineNumber>{" "}
                    <Remark>∕∕ I graduated from Civil Engineering.</Remark>
                </AboutLine>
                <AboutLine>
                    <LineNumber>6</LineNumber>{" "}
                    <Remark>
                        ∕∕ I have started about learning code & development
                    </Remark>
                </AboutLine>
                <AboutLine>
                    <LineNumber>7</LineNumber>{" "}
                    <Remark>∕∕ to make the product in a start-up.</Remark>
                </AboutLine>

                <AboutLine>
                    <LineNumber>8</LineNumber>
                </AboutLine>

                <AboutLine>
                    <LineNumber>9</LineNumber> <Method>constructor</Method> (
                    <PropsName>props</PropsName>)﹛
                </AboutLine>
                <AboutLine>
                    <LineNumber>10</LineNumber>··<Method>super</Method> (
                    <PropsName>props</PropsName>);
                </AboutLine>
                <AboutLine>
                    <LineNumber>11</LineNumber>··<Method>this</Method>.
                    <PropsName>state</PropsName>=﹛
                </AboutLine>
                <AboutLine>
                    <LineNumber>12</LineNumber>····
                    <PropsName>koreanName</PropsName>={" "}
                    <String>"Junsu Kim"</String>
                </AboutLine>
                <AboutLine>
                    <LineNumber>13</LineNumber>····
                    <PropsName>englishName</PropsName>={" "}
                    <String>"Cole Kim"</String>
                </AboutLine>
                <AboutLine>
                    <LineNumber>14</LineNumber>····
                    <PropsName>phoneNumber</PropsName>={" "}
                    <String>+82)10-2090-3029</String>
                </AboutLine>
                <AboutLine>
                    <LineNumber>15</LineNumber>····<PropsName>eMail</PropsName>={" "}
                    <String>‘banjag954@naver.com’</String>
                </AboutLine>
                <AboutLine>
                    <LineNumber>16</LineNumber> ··﹜
                </AboutLine>
                <AboutLine>
                    <LineNumber>17</LineNumber> ﹜
                </AboutLine>

                <AboutLine>
                    <LineNumber>18</LineNumber>
                </AboutLine>

                {/*/////////////////////////////////////////////////////////////////////////////////////////*/}

                <AboutLine>
                    <LineNumber>19</LineNumber>{" "}
                    <Method>Duty & workExperience</Method>()﹛
                </AboutLine>
                <AboutLine>
                    <LineNumber>20</LineNumber> ··<Return>return</Return>(
                </AboutLine>
                <AboutLine>
                    <LineNumber>21</LineNumber> ····[ 2016.10 ~ Now /{" "}
                    <b>Head of Design</b> at <b>Archisketch.inc</b>
                </AboutLine>
                <AboutLine>
                    <LineNumber>22</LineNumber> ····
                    <String>
                        'Archisketch Service Designer / UI Developer'
                    </String>{" "}
                    ],
                </AboutLine>
                <AboutLine>
                    <LineNumber>23</LineNumber> ····[ 2016.07 ~ 2016.09 /{" "}
                    <b>Freelancer</b> at <b>Dot-mill.inc</b>
                </AboutLine>
                <AboutLine>
                    <LineNumber>24</LineNumber> ····
                    <String>
                        'made <b>Comic Maple Story Hologram Musical</b>'
                    </String>
                    ],
                </AboutLine>
                <AboutLine>
                    <LineNumber>25</LineNumber> ····[ 2011.01 ~ 2012.10 :
                </AboutLine>
                <AboutLine>
                    <LineNumber>26</LineNumber> ····
                    <String>'Artilleryman in Republic of Korea Army'</String> ]
                </AboutLine>
                <AboutLine>
                    <LineNumber>27</LineNumber>··)
                </AboutLine>
                <AboutLine>
                    <LineNumber>28</LineNumber>﹜
                </AboutLine>

                <AboutLine>
                    <LineNumber>29</LineNumber>
                </AboutLine>

                {/*/////////////////////////////////////////////////////////////////////////////////////////*/}

                <AboutLine>
                    <LineNumber>30</LineNumber> <Method>Education</Method>()﹛
                </AboutLine>
                <AboutLine>
                    <LineNumber>31</LineNumber> ··<Return>return</Return>(
                </AboutLine>
                <AboutLine>
                    <LineNumber>32</LineNumber> ····[ 2010.03 ~ 2017.02 /{" "}
                    <b>Sejong Univ</b>:
                </AboutLine>
                <AboutLine>
                    <LineNumber>33</LineNumber> ····
                    <String>
                        'B.Sc. in Civil & Environmental Engineering'
                    </String>{" "}
                    ],
                </AboutLine>
                <AboutLine>
                    <LineNumber>34</LineNumber> ····[ 2015.01 ~ 2015.11 /{" "}
                    <b>VDAS Design Academy</b>:
                </AboutLine>
                <AboutLine>
                    <LineNumber>35</LineNumber> ····
                    <String>
                        'Complete course of Motion & Graphic Design'
                    </String>{" "}
                    ]
                </AboutLine>

                <AboutLine>
                    <LineNumber>36</LineNumber>··)
                </AboutLine>

                <AboutLine>
                    <LineNumber>37</LineNumber>﹜
                </AboutLine>

                <AboutLine>
                    <LineNumber>38</LineNumber>
                </AboutLine>

                {/*/////////////////////////////////////////////////////////////////////////////////////////*/}

                <AboutLine>
                    <LineNumber>39</LineNumber>{" "}
                    <Method>Awards & Activities</Method>
                    ()﹛
                </AboutLine>
                <AboutLine>
                    <LineNumber>40</LineNumber> ··<Return>return</Return>(
                </AboutLine>
                <AboutLine>
                    <LineNumber>41</LineNumber> ····[ 2015.07 ~ 2015.08 /{" "}
                    <b>Design Time Line Exhibition</b>:{" "}
                </AboutLine>
                <AboutLine>
                    <LineNumber>42</LineNumber> ····
                    <String>'Exhibition about Frank Lloyd Wright</String>{" "}
                </AboutLine>
                <AboutLine>
                    <LineNumber>43</LineNumber> ····
                    <String>
                        at [ Leaders' Gallery - Soo ], in Seoul.'
                    </String>{" "}
                    ],
                </AboutLine>

                <AboutLine>
                    <LineNumber>44</LineNumber> ····[ 2014.12 /{" "}
                    <b>Bronze Prize</b>:{" "}
                </AboutLine>
                <AboutLine>
                    <LineNumber>45</LineNumber> ····
                    <String>
                        '2014 Creative-Fusion Ideas Competition,
                    </String>{" "}
                </AboutLine>
                <AboutLine>
                    <LineNumber>46</LineNumber> ····
                    <String>National Research Foundation of Korea.'</String> ],
                </AboutLine>

                <AboutLine>
                    <LineNumber>47</LineNumber> ····[ 2014.11 / <b>2nd Prize</b>
                    :{" "}
                </AboutLine>
                <AboutLine>
                    <LineNumber>48</LineNumber> ····
                    <String>
                        '2nd Public Data Utilization Start-up Competition
                    </String>{" "}
                </AboutLine>
                <AboutLine>
                    <LineNumber>49</LineNumber> ····
                    <String>
                        with <b>ArchiDraw Team</b>.'
                    </String>{" "}
                    ],
                </AboutLine>

                <AboutLine>
                    <LineNumber>50</LineNumber> ····[ 2014.08 /{" "}
                    <b>Special Prize</b>:
                </AboutLine>
                <AboutLine>
                    <LineNumber>51</LineNumber> ····
                    <String>
                        '2st Land, Infrastructure and Transport Technology Fair,
                    </String>
                </AboutLine>
                <AboutLine>
                    <LineNumber>52</LineNumber> ····
                    <String>KAIA Korea.'</String> ],
                </AboutLine>

                <AboutLine>
                    <LineNumber>53</LineNumber> ····[ 2014.07 ~ 2014.12 /{" "}
                    <b>2nd Kepco Supporters</b>:{" "}
                </AboutLine>
                <AboutLine>
                    <LineNumber>54</LineNumber> ····
                    <String>
                        'Promoted Korea Electric Power Corporation
                    </String>{" "}
                </AboutLine>
                <AboutLine>
                    <LineNumber>55</LineNumber> ····
                    <String>through online & offline activities.'</String> ],
                </AboutLine>

                <AboutLine>
                    <LineNumber>56</LineNumber> ····[ 2014.03 /{" "}
                    <b>Bronze Prize</b>:{" "}
                </AboutLine>
                <AboutLine>
                    <LineNumber>57</LineNumber> ····
                    <String>
                        '17th Korea Civil Engineers day: Civil Engineering
                        Contest,
                    </String>
                </AboutLine>
                <AboutLine>
                    <LineNumber>58</LineNumber> ····
                    <String>KSCE Korea.'</String> ],
                </AboutLine>

                <AboutLine>
                    <LineNumber>59</LineNumber> ····[ 2013.07 /{" "}
                    <b>Special Prize</b>:{" "}
                </AboutLine>
                <AboutLine>
                    <LineNumber>60</LineNumber> ····
                    <String>
                        '1st Land, Infrastructure and Transport Technology Fair,
                    </String>{" "}
                </AboutLine>
                <AboutLine>
                    <LineNumber>61</LineNumber> ····
                    <String>KAIA Korea.'</String> ],
                </AboutLine>

                <AboutLine>
                    <LineNumber>62</LineNumber> ····[ 2013.05 ~ 2013.12 /{" "}
                    <b>7th K-water Supporters</b>:
                </AboutLine>
                <AboutLine>
                    <LineNumber>63</LineNumber> ····
                    <String>'Promoted Korea Water Resources Corporation</String>
                </AboutLine>
                <AboutLine>
                    <LineNumber>64</LineNumber> ····
                    <String>through online & offline activities.'</String> ]
                </AboutLine>

                <AboutLine>
                    <LineNumber>65</LineNumber>··)
                </AboutLine>
                <AboutLine>
                    <LineNumber>66</LineNumber>﹜
                </AboutLine>

                <AboutLine>
                    <LineNumber>67</LineNumber>
                </AboutLine>

                {/*/////////////////////////////////////////////////////////////////////////////////////////*/}

                <AboutLine>
                    <LineNumber>68</LineNumber> <Method>Skill</Method>()﹛
                </AboutLine>
                <AboutLine>
                    <LineNumber>69</LineNumber> ··<Return>return</Return>(
                </AboutLine>
                <AboutLine>
                    <LineNumber>70</LineNumber> ····[ <b>Design skills</b> :{" "}
                    <String>'Photoshop, AfterEffect, Illustration</String>
                </AboutLine>
                <AboutLine>
                    <LineNumber>71</LineNumber> ····
                    <String>Sketch,Figma'</String> ],
                </AboutLine>
                <AboutLine>
                    <LineNumber>72</LineNumber> ····[ <b>Developement skills</b>{" "}
                    : <String>'HTML, CSS, SASS, Javascript</String>
                </AboutLine>
                <AboutLine>
                    <LineNumber>73</LineNumber> ····
                    <String>
                        React, Styled-components, Git, Node, AWS'
                    </String>{" "}
                    ],
                </AboutLine>

                <AboutLine>
                    <LineNumber>74</LineNumber> ····[{" "}
                    <b>Document work skills</b> :{" "}
                    <String>'Microsoft Office</String>
                </AboutLine>
                <AboutLine>
                    <LineNumber>75</LineNumber> ····
                    <String>Apple iWorks, Atlassian Software'</String> ],
                </AboutLine>
                <AboutLine>
                    <LineNumber>76</LineNumber>··)
                </AboutLine>
                <AboutLine>
                    <LineNumber>77</LineNumber>﹜<AboutFinish>⎪</AboutFinish>
                </AboutLine>
            </IntroWrap>
        </>
    );
};

export default IntroCole;
