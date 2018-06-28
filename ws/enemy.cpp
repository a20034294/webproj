#include <bits/stdc++.h>
#include <time.h>
#include <windows.h>

using namespace std;
FILE *r, *w;
struct player {
    int id, type, x, y, name;
    player(int ID, int TYPE, int X, int Y) : id(ID), type(TYPE), x(X), y(Y) {}
    player() {}
};
player data[1000];
int main() {
    int i = 0;
    float pi = 3.1415926;
    srand(time(NULL));
    while (1) {
        Sleep(2000);
        freopen("enemy.txt", "w", stdout);

        cout << "e " << rand() % 1280 << " " << rand() % 720 << " "
             << (float)(rand() % 6282) / 1000 << endl;
        // fclose(w);
        fclose(w);
    }

    return 0;
}