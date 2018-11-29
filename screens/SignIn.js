<View style={styles.getStartedContainer}>
              {this._maybeRenderDevelopmentModeWarning()}

              <Text style={styles.getStartedText}>Enter your information</Text>

              {this.state.loggedIn ? <Text>Welcome {this.state.username}!</Text> : <UserLogIn signIn={this.updateLogin}></UserLogIn>}
            </View>


            <View style={styles.getStartedContainer}>
              {this._maybeRenderDevelopmentModeWarning()}

              <Text style={styles.getStartedText}>Enter your information</Text>

              {this.state.loggedIn ? <Text>Welcome {this.state.username}!</Text> : <UserLogIn signIn={this.updateLogin}></UserLogIn>}
            </View>